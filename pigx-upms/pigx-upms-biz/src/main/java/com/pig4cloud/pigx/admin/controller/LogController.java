/*
 *
 *      Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 *  this list of conditions and the following disclaimer.
 *  Redistributions in binary form must reproduce the above copyright
 *  notice, this list of conditions and the following disclaimer in the
 *  documentation and/or other materials provided with the distribution.
 *  Neither the name of the pig4cloud.com developer nor the names of its
 *  contributors may be used to endorse or promote products derived from
 *  this software without specific prior written permission.
 *  Author: lengleng (wangiegie@gmail.com)
 *
 */

package com.pig4cloud.pigx.admin.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.pig4cloud.pigx.admin.api.entity.SysLog;
import com.pig4cloud.pigx.admin.api.vo.PreLogVo;
import com.pig4cloud.pigx.admin.service.SysLogService;
import com.pig4cloud.pigx.common.core.util.Query;
import com.pig4cloud.pigx.common.core.util.R;
import io.swagger.annotations.Api;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 日志表 前端控制器
 * </p>
 *
 * @author lengleng
 * @since 2017-11-20
 */
@RestController
@AllArgsConstructor
@RequestMapping("/log")
@Api(value = "log",description = "日志管理模块")
public class LogController {
	private final SysLogService sysLogService;

	/**
	 * 分页查询日志信息
	 *
	 * @param params 分页对象
	 * @return 分页对象
	 */
	@GetMapping("/logPage")
	public Page logPage(@RequestParam Map<String, Object> params) {
		return sysLogService.selectPage(new Query<>(params), new EntityWrapper<>());
	}

	/**
	 * 根据ID
	 *
	 * @param id ID
	 * @return success/false
	 */
	@DeleteMapping("/{id}")
	@PreAuthorize("@pms.hasPermission('sys_log_del')")
	public R<Boolean> delete(@PathVariable Long id) {
		return new R<>(sysLogService.updateByLogId(id));
	}

	/**
	 * 插入日志
	 *
	 * @param sysLog 日志实体
	 * @return success/false
	 */
	@PostMapping
	public R<Boolean> save(@Valid @RequestBody SysLog sysLog) {
		return new R<>(sysLogService.insert(sysLog));
	}

	/**
	 * 插入前端异常日志
	 *
	 * @param preLogVoList 日志实体
	 * @return success/false
	 */
	@PostMapping("/logs")
	public R<Boolean> saveLogs(@RequestBody List<PreLogVo> preLogVoList) {
		return new R<>(sysLogService.insertLogs(preLogVoList));
	}
}
