/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

package com.pig4cloud.pigx.common.security.component;

import cn.hutool.core.util.ClassUtil;
import com.pig4cloud.pigx.common.security.annotation.EnablePigxResourceServer;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Primary;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.web.client.RestTemplate;

import java.util.Set;

/**
 * @author lengleng
 * @date 2018/11/10
 */
@ComponentScan("com.pig4cloud.pigx.common.security")
public class PigxResourceServerAutoConfiguration {
	@Bean
	@Primary
	@LoadBalanced
	public RestTemplate lbRestTemplate() {
		return new RestTemplate();
	}

	@Bean
	@ConditionalOnMissingBean(ResourceServerConfigurerAdapter.class)
	public ResourceServerConfigurerAdapter resourceServerConfigurerAdapter() {
		Set<Class<?>> classes = ClassUtil.scanPackageByAnnotation("com.pig4cloud.pigx", EnablePigxResourceServer.class);
		boolean details = false;
		for (Class<?> clazz : classes) {
			details = clazz.getAnnotation(EnablePigxResourceServer.class).details();
		}
		BaseResourceServerConfigurerAdapter baseResourceServerConfigurerAdapter
			= new BaseResourceServerConfigurerAdapter();
		baseResourceServerConfigurerAdapter.setDetails(details);
		return baseResourceServerConfigurerAdapter;
	}
}
