<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
   exit;
}

function savefile($filename, $content) {
	if (file_exists($filename)) {
		$file = file_get_contents($filename);
		$filedata = json_decode($file, true);
	} else {
		$filedata = array();
	}

	array_push($filedata, $content);
	file_put_contents($filename, json_encode($filedata));
}

$data = json_decode(file_get_contents('php://input'), true);

if ($data["section"] == 'stress_screen') {
	// L1-CSM
	$result[0]["depr"] = max($data["s2_q1"], $data["s2_q2"]);
	$result[0]["angr"] = $data["s2_q3"];
	$result[0]["mani"] = max($data["s2_q4"], $data["s2_q5"]);
	$result[0]["anxt"] = max($data["s2_q6"], $data["s2_q7"], $data["s2_q8"]);
	$result[0]["soma"] = max($data["s2_q9"], $data["s2_q10"]);
	$result[0]["suic"] = $data["s2_q11"];
	$result[0]["psyc"] = max($data["s2_q12"], $data["s2_q13"]);
	$result[0]["slep"] = $data["s2_q14"];
	$result[0]["memo"] = $data["s2_q15"];
	$result[0]["rumi"] = max($data["s2_q16"], $data["s2_q17"]);
	$result[0]["diso"] = max($data["s2_q18"], $data["s2_q19"], $data["s2_q20"], $data["s2_q21"]);
	$result[0]["pern"] = max($data["s2_q22"], $data["s2_q23"]);
	$result[0]["refr"] = max($data["s2_q24"], $data["s2_q25"]);
	$result[0]["pers"] = max($data["s2_q26"], $data["s2_q27"]);
	$result[0]["subt"] = max($data["s2_q28"], $data["s2_q29"], $data["s2_q30"]);

	$result[1]["mood"] = max($result[0]["depr"], $result[0]["angr"], $result[0]["mani"], $result[0]["soma"], $result[0]["slep"]);
	$result[1]["othr"] = max($result[0]["soma"], $result[0]["suic"], $result[0]["psyc"], $result[0]["memo"], $result[0]["rumi"], $result[0]["diso"], $result[0]["pern"], $result[0]["refr"], $result[0]["pers"], $result[0]["subt"]);

	if ($result[1]["othr"] >= 2) {
		$res["overall_state"] = 2;
	} else if ($result[1]["mood"] >= 2) {
		$res["overall_state"] = 1;
	} else {
		$res["overall_state"] = 0;
	}

	$res["section"] = 'stress_screen';
	$res["timestamp"] = time();
	$res["status"] = 201;

	echo json_encode($res);

	savefile('stress_screen_db.json', $data);
	
} elseif ($data["section"] == 'stress') {
	// HADS
	$result["hads_anxt"] = 15 - $data["s2_q1"] - $data["s2_q3"] - $data["s2_q5"] + $data["s2_q7"] + $data["s2_q9"] - $data["s2_q11"] - $data["s2_q13"];
	$result["hads_depr"] = 9 + $data["s2_q2"] + $data["s2_q4"] - $data["s2_q6"] - $data["s2_q8"] - $data["s2_q10"] + $data["s2_q12"] + $data["s2_q14"];

	$res["depr_state"] = ($result["hads_depr"] <= 7) ? 0 : (($result["hads_depr"] >= 12) ? 2 : 1);
	$res["anxt_state"] = ($result["hads_anxt"] <= 7) ? 0 : (($result["hads_anxt"] >= 12) ? 2 : 1);
	$res["depr_percent"] = floor(($result["hads_depr"] / 21) * 100);
	$res["anxt_percent"] = floor(($result["hads_anxt"] / 21) * 100);

	// ITQ
	$result["itq_reex"] = 8 - ($data["s3_q1"] + $data["s3_q2"]);
	$result["itq_avoi"] = 8 - ($data["s3_q3"] + $data["s3_q4"]);
	$result["itq_thrt"] = 8 - ($data["s3_q5"] + $data["s3_q6"]);
	$result["itq_ptsd_imp"] = 12 - ($data["s3_q7"] + $data["s3_q8"] + $data["s3_q9"]);
	$result["itq_ptsd"] = $result["itq_reex"] + $result["itq_avoi"] + $result["itq_thrt"];

	$result["itq_afft"] = 8 - ($data["s4_q1"] + $data["s4_q2"]);
	$result["itq_nega"] = 8 - ($data["s4_q3"] + $data["s4_q4"]);
	$result["itq_rela"] = 8 - ($data["s4_q5"] + $data["s4_q6"]);
	$result["itq_dso_imp"] = 12 - ($data["s4_q7"] + $data["s4_q8"] + $data["s4_q9"]);
	$result["itq_dso"] = $result["itq_afft"] + $result["itq_nega"] + $result["itq_rela"];

	$res["ptsd_state"] = ($result["itq_ptsd"] <= 5) ? 0 : (($result["itq_ptsd"] >= 12) ? 2 : 1);
	$res["dso_state"] = ($result["itq_dso"] <= 5) ? 0 : (($result["itq_dso"] >= 12) ? 2 : 1);
	$res["ptsd_percent"] = floor(($result["itq_ptsd"] / 24) * 100);
	$res["dso_percent"] = floor(($result["itq_dso"] / 24) * 100);

	// SSS-8
	$result["sss_soma"] = 32 - ($data["s5_q1"] + $data["s5_q2"] + $data["s5_q3"] + $data["s5_q4"] + $data["s5_q5"] + $data["s5_q6"] + $data["s5_q7"] + $data["s5_q8"]);

	$res["soma_state"] = ($result["sss_soma"] <= 7) ? 0 : (($result["sss_soma"] >= 16) ? 2 : 1);
	$res["soma_percent"] = floor(($result["sss_soma"] / 32) * 100);

	// DSS
	$result["dss_dede"] = $data["s6_q1"] + $data["s6_q2"] + $data["s6_q5"] + $data["s6_q8"] + $data["s6_q13"] + $data["s6_q16"];
	$result["dss_gaps"] = $data["s6_q11"] + $data["s6_q12"] + $data["s6_q15"] + $data["s6_q18"] + $data["s6_q19"];
	$result["dss_sens"] = $data["s6_q6"] + $data["s6_q7"] + $data["s6_q9"] + $data["s6_q14"] + $data["s6_q20"];
	$result["dss_reex"] = $data["s6_q3"] + $data["s6_q4"] + $data["s6_q10"] + $data["s6_q17"];
	$result["dss_total"] = $result["dss_dede"] + $result["dss_gaps"] + $result["dss_sens"] + $result["dss_reex"];	

	$res["diso_state"] = ($result["dss_total"] <= 15) ? 0 : (($result["dss_total"] >= 40) ? 2 : 1);
	$res["diso_percent"] = floor(($result["dss_total"] / 80) * 100);


	// BSL
	$result["bsl_pern"] = 92 - ($data["s7_q1"] + $data["s7_q2"] + $data["s7_q3"] + $data["s7_q4"] + $data["s7_q5"] + $data["s7_q6"] + $data["s7_q7"] + $data["s7_q8"] + $data["s7_q9"] + $data["s7_q10"] + $data["s7_q11"] + $data["s7_q12"] + $data["s7_q13"] + $data["s7_q14"] + $data["s7_q15"] + $data["s7_q16"] + $data["s7_q17"] + $data["s7_q18"] + $data["s7_q19"] + $data["s7_q20"] + $data["s7_q21"] + $data["s7_q22"] + $data["s7_q23"]);
	$result["bsl_imps"] = $data["s8_q1"] + $data["s8_q2"] + $data["s8_q3"] + $data["s8_q4"] + $data["s8_q5"] + $data["s8_q6"] + $data["s8_q7"] + $data["s8_q8"] + $data["s8_q9"] + $data["s8_q10"] + $data["s8_q11"];


	$res["pern_state"] = ($result["bsl_pern"] <= 44) ? 0 : (($result["bsl_pern"] >= 62) ? 2 : 1);
	$res["imps_state"] = ($result["bsl_imps"] <= 0) ? 0 : (($result["bsl_imps"] >= 10) ? 2 : 1);
	$res["pern_percent"] = floor(($result["bsl_pern"] / 92) * 100);
	$res["imps_percent"] = floor(($result["bsl_imps"] / 44) * 100);

	// FSCSR
	$result["fscsr_reas"] = 32 - ($data["s9_q3"] + $data["s9_q5"] + $data["s9_q8"] + $data["s9_q11"] + $data["s9_q13"] + $data["s9_q16"] + $data["s9_q19"] + $data["s9_q21"]);
	$result["fscsr_inad"] = 36 - ($data["s9_q1"] + $data["s9_q2"] + $data["s9_q4"] + $data["s9_q6"] + $data["s9_q7"] + $data["s9_q14"] + $data["s9_q17"] + $data["s9_q18"] + $data["s9_q20"]);
	$result["fscsr_hate"] = 20 - ($data["s9_q9"] + $data["s9_q10"] + $data["s9_q12"] + $data["s9_q15"] + $data["s9_q22"]);

	$res["reas_state"] = ($result["fscsr_reas"] <= 16) ? 0 : (($result["fscsr_reas"] >= 25) ? 2 : 1);
	$res["inad_state"] = ($result["fscsr_inad"] <= 11) ? 0 : (($result["fscsr_inad"] >= 25) ? 2 : 1);
	$res["hate_state"] = ($result["fscsr_hate"] <= 0) ? 0 : (($result["fscsr_hate"] >= 7) ? 2 : 1);
	$res["reas_percent"] = floor(($result["fscsr_reas"] / 32) * 100);
	$res["inad_percent"] = floor(($result["fscsr_inad"] / 36) * 100);
	$res["hate_percent"] = floor(($result["fscsr_hate"] / 20) * 100);

	// RFQ-8
	$conv = [0, 0, 0, 0, 1, 2, 3];
	$result["rfq_cert"] = $conv[$data["s10_q1"]] + $conv[$data["s10_q2"]] + $conv[$data["s10_q3"]] + $conv[$data["s10_q4"]] + $conv[$data["s10_q5"]] + $conv[$data["s10_q6"]];

	$res["refl_state"] = ($result["rfq_cert"] <= 8) ? 0 : (($result["rfq_cert"] >= 15) ? 2 : 1);
	$res["refl_percent"] = floor(($result["rfq_cert"] / 24) * 100);

	// BBTS
	$result["bbts_child_rel"] = $data["s11_q3"] + $data["s11_q5"] + $data["s11_q6"] + $data["s11_q8"] + $data["s11_q10"];
	$result["bbts_child_nrel"] = $data["s11_q1"] + $data["s11_q2"] + $data["s11_q4"] + $data["s11_q7"] + $data["s11_q9"];
	$result["bbts_adult_rel"] = $data["s12_q3"] + $data["s12_q5"] + $data["s12_q6"] + $data["s12_q8"] + $data["s12_q10"];
	$result["bbts_adult_nrel"] = $data["s12_q1"] + $data["s12_q2"] + $data["s12_q4"] + $data["s12_q7"] + $data["s12_q9"];

	$res["ctre_state"] = ($result["bbts_child_rel"] <= 0) ? 0 : 1;
	$res["ctnr_state"] = ($result["bbts_child_nrel"] <= 0) ? 0 : 1;
	$res["atre_state"] = ($result["bbts_adult_rel"] <= 0) ? 0 : 1;
	$res["atnr_state"] = ($result["bbts_adult_nrel"] <= 0) ? 0 : 1;

	// MOPS
	$result["mops_m_indi"] = $data["s13_q5"] + $data["s13_q8"] + $data["s13_q10"] + $data["s13_q11"] + $data["s13_q12"] + $data["s13_q13"];
	$result["mops_m_ctrl"] = $data["s13_q1"] + $data["s13_q3"] + $data["s13_q4"] + $data["s13_q6"];
	$result["mops_m_abus"] = $data["s13_q2"] + $data["s13_q7"] + $data["s13_q9"] + $data["s13_q14"] + $data["s13_q15"];
	$result["mops_m_total"] = $result["mops_m_indi"] + $result["mops_m_ctrl"];

	$result["mops_f_indi"] = $data["s14_q5"] + $data["s14_q8"] + $data["s14_q10"] + $data["s14_q11"] + $data["s14_q12"] + $data["s14_q13"];
	$result["mops_f_ctrl"] = $data["s14_q1"] + $data["s14_q3"] + $data["s14_q4"] + $data["s14_q6"];
	$result["mops_f_abus"] = $data["s14_q2"] + $data["s14_q7"] + $data["s14_q9"] + $data["s14_q14"] + $data["s14_q15"];
	$result["mops_f_total"] = $result["mops_f_indi"] + $result["mops_f_ctrl"];

	if (($result["mops_m_total"] >= 999) && ($result["mops_f_total"] >= 999)) {
		$res["prtn_state"] = 999;
	} else if ($result["mops_m_total"] >= 999) {
		$res["prtn_state"] = ($result["mops_f_total"] <= 5) ? 0 : (($result["mops_f_total"] >= 15) ? 2 : 1);
	} else if ($result["mops_f_total"] >= 999) {
		$res["prtn_state"] = ($result["mops_m_total"] <= 5) ? 0 : (($result["mops_m_total"] >= 15) ? 2 : 1);
	} else {
		$result["mops_total"] = ($result["mops_m_total"] + $result["mops_f_total"])/2;
		$res["prtn_state"] = ($result["mops_total"] <= 5) ? 0 : (($result["mops_total"] >= 15) ? 2 : 1);
	}

	$res["section"] = 'stress';
	$res["timestamp"] = time();
	$res["status"] = 201;

	echo json_encode($res);

	savefile('stress_db.json', $data);

} elseif ($data["section"] == 'partner') {
	// ECR
	$result["ecr_avoi"] = 144 - (18 + 72 + $data["s1_q1"] - $data["s1_q3"] + $data["s1_q5"] + $data["s1_q7"] + $data["s1_q9"] + $data["s1_q11"] + $data["s1_q13"] - $data["s1_q15"] + $data["s1_q17"] - $data["s1_q19"] + $data["s1_q21"] + $data["s1_q23"] - $data["s1_q25"] - $data["s1_q27"] - $data["s1_q29"] - $data["s1_q31"] - $data["s1_q33"] - $data["s1_q35"]);
	$result["ecr_anxt"] = 144 - (18 + 8 + $data["s1_q2"] + $data["s1_q4"] + $data["s1_q6"] + $data["s1_q8"] + $data["s1_q10"] + $data["s1_q12"] + $data["s1_q14"] + $data["s1_q16"] + $data["s1_q18"] + $data["s1_q20"] - $data["s1_q22"] + $data["s1_q24"] + $data["s1_q26"] + $data["s1_q28"] + $data["s1_q30"] + $data["s1_q32"] + $data["s1_q34"] + $data["s1_q36"]);

	$res["atav_state"] = ($result["ecr_avoi"] <= 32) ? 0 : (($result["ecr_avoi"] >= 64) ? 2 : 1);
	$res["atan_state"] = ($result["ecr_anxt"] <= 32) ? 0 : (($result["ecr_anxt"] >= 64) ? 2 : 1);
	$res["atav_percent"] = floor((($result["ecr_avoi"] - 18) / 108) * 100);
	$res["atan_percent"] = floor((($result["ecr_anxt"] - 18) / 108) * 100);

	// PPRS
	$result["pprs_stop"] = 96 - (12 + $data["s2_q1"] + $data["s2_q2"] + $data["s2_q3"] + $data["s2_q4"] + $data["s2_q5"] + $data["s2_q6"] + $data["s2_q7"] + $data["s2_q8"] + $data["s2_q9"] + $data["s2_q10"] + $data["s2_q11"] + $data["s2_q12"]);
	$result["pprs_ptos"] = 96 - (12 + $data["s2_q13"] + $data["s2_q14"] + $data["s2_q15"] + $data["s2_q16"] + $data["s2_q17"] + $data["s2_q18"] + $data["s2_q19"] + $data["s2_q20"] + $data["s2_q21"] + $data["s2_q22"] + $data["s2_q23"] + $data["s2_q24"]);
	
	$res["stop_state"] = ($result["pprs_stop"] <= 21) ? 0 : (($result["pprs_stop"] >= 42) ? 2 : 1);
	$res["ptos_state"] = ($result["pprs_ptos"] <= 21) ? 0 : (($result["pprs_ptos"] >= 32) ? 2 : 1);
	$res["stop_percent"] = floor((($result["pprs_stop"] - 12) / 72) * 100);
	$res["ptos_percent"] = floor((($result["pprs_ptos"] - 12) / 72) * 100);

	// CRSI
	$result[0]["crsi_s_cmpt"] = 24 - (4 + $data["s3_q1"] + $data["s3_q5"] + $data["s3_q9"] + $data["s3_q13"]);
	$result[0]["crsi_s_clbr"] = 24 - (4 + $data["s3_q2"] + $data["s3_q6"] + $data["s3_q10"] + $data["s3_q14"]);
	$result[0]["crsi_s_avoi"] = 24 - (4 + $data["s3_q3"] + $data["s3_q7"] + $data["s3_q11"] + $data["s3_q15"]);
	$result[0]["crsi_s_acmd"] = 24 - (4 + $data["s3_q4"] + $data["s3_q8"] + $data["s3_q12"] + $data["s3_q16"]);

	$result[0]["crsi_p_cmpt"] = 24 - (4 + $data["s4_q1"] + $data["s4_q5"] + $data["s4_q9"] + $data["s4_q13"]);
	$result[0]["crsi_p_clbr"] = 24 - (4 + $data["s4_q2"] + $data["s4_q6"] + $data["s4_q10"] + $data["s4_q14"]);
	$result[0]["crsi_p_avoi"] = 24 - (4 + $data["s4_q3"] + $data["s4_q7"] + $data["s4_q11"] + $data["s4_q15"]);
	$result[0]["crsi_p_acmd"] = 24 - (4 + $data["s4_q4"] + $data["s4_q8"] + $data["s4_q12"] + $data["s4_q16"]);

	$arr1 = array($result[0]["crsi_s_cmpt"], $result[0]["crsi_s_clbr"], $result[0]["crsi_s_avoi"], $result[0]["crsi_s_acmd"]);
	$arr1_sort = $arr1;
	sort($arr1_sort);

	if ($arr1_sort[2] == $arr1_sort[3]) {
	   $res["crsi_s_max"] = array_keys($arr1_sort, $arr1_sort[3])[0];
	   $res["crsi_s_secmax"] = array_keys($arr1_sort, $arr1_sort[3])[1];
	} else {
	   $res["crsi_s_max"] = array_search($arr1_sort[3], $arr1);
	   $res["crsi_s_secmax"] = array_search($arr1_sort[2], $arr1);
	}

	$arr2 = array($result[0]["crsi_p_cmpt"], $result[0]["crsi_p_clbr"], $result[0]["crsi_p_avoi"], $result[0]["crsi_p_acmd"]);
	$arr2_sort = $arr2;
	sort($arr2_sort);

	if ($arr2_sort[2] == $arr2_sort[3]) {
	   $res["crsi_p_max"] = array_keys($arr2_sort, $arr2_sort[3])[0];
	   $res["crsi_p_secmax"] = array_keys($arr2_sort, $arr2_sort[3])[1];
	} else {
	   $res["crsi_p_max"] = array_search($arr2_sort[3], $arr2);
	   $res["crsi_p_secmax"] = array_search($arr2_sort[2], $arr2);
	}

	$res["section"] = 'partner';
	$res["timestamp"] = time();
	$res["status"] = 201;

	echo json_encode($res);

	savefile('partner_db.json', $data);

} elseif ($data["section"] == 'parent') {
	// SDQ
	$result["sdq_emot"] = 10 - ($data["s2_q3"] + $data["s2_q8"] + $data["s2_q13"] + $data["s2_q16"] + $data["s2_q24"]);
	$result["sdq_cond"] = 10 - (2 + $data["s2_q5"] - $data["s2_q7"] + $data["s2_q12"] + $data["s2_q18"] + $data["s2_q22"]);
	$result["sdq_hype"] = 10 - (4 + $data["s2_q2"] + $data["s2_q10"] + $data["s2_q15"] - $data["s2_q21"] - $data["s2_q25"]);
	$result["sdq_peer"] = 10 - (4 + $data["s2_q6"] - $data["s2_q11"] - $data["s2_q14"] + $data["s2_q19"] + $data["s2_q23"]);
	$result["sdq_pros"] = 10 - ($data["s2_q1"] + $data["s2_q4"] + $data["s2_q9"] + $data["s2_q17"] + $data["s2_q20"]);

	$result["sdq_extl"] = $result["sdq_cond"] + $result["sdq_hype"];
	$result["sdq_intl"] = $result["sdq_emot"] + $result["sdq_peer"];

	$res["extl_state"] = ($result["sdq_extl"] <= 7) ? 0 : (($result["sdq_extl"] >= 10) ? 2 : 1);
	$res["intl_state"] = ($result["sdq_intl"] <= 5) ? 0 : (($result["sdq_intl"] >= 8) ? 2 : 1);
	$res["pros_state"] = ($result["sdq_pros"] <= 4) ? 0 : (($result["sdq_pros"] >= 6) ? 2 : 1);
	$res["extl_percent"] = floor(($result["sdq_extl"] / 20) * 100);
	$res["intl_percent"] = floor(($result["sdq_intl"] / 20) * 100);
	$res["pros_percent"] = floor(($result["sdq_pros"] / 10) * 100);

	// MOPS
	$result["mops_s_indi"] = $data["s3_q5"] + $data["s3_q8"] + $data["s3_q10"] + $data["s3_q11"] + $data["s3_q12"] + $data["s3_q13"];
	$result["mops_s_ctrl"] = $data["s3_q1"] + $data["s3_q3"] + $data["s3_q4"] + $data["s3_q6"];
	$result["mops_s_abus"] = $data["s3_q2"] + $data["s3_q7"] + $data["s3_q9"] + $data["s3_q14"] + $data["s3_q15"];

	$result["mops_p_indi"] = $data["s4_q5"] + $data["s4_q8"] + $data["s4_q10"] + $data["s4_q11"] + $data["s4_q12"] + $data["s4_q13"];
	$result["mops_p_ctrl"] = $data["s4_q1"] + $data["s4_q3"] + $data["s4_q4"] + $data["s4_q6"];
	$result["mops_p_abus"] = $data["s4_q2"] + $data["s4_q7"] + $data["s4_q9"] + $data["s4_q14"] + $data["s4_q15"];

	$result["mops_indi"] = ($result["mops_s_indi"] + $result["mops_p_indi"]) / 2;
	$result["mops_ctrl"] = ($result["mops_s_ctrl"] + $result["mops_p_ctrl"]) / 2;
	$result["mops_abus"] = ($result["mops_s_abus"] + $result["mops_p_abus"]) / 2;

	$res["indi_state"] = ($result["mops_indi"] <= 4) ? 0 : (($result["mops_indi"] >= 9) ? 2 : 1);
	$res["ctrl_state"] = ($result["mops_ctrl"] <= 3) ? 0 : (($result["mops_ctrl"] >= 6) ? 2 : 1);
	$res["abus_state"] = ($result["sdq_pros"] <= 4) ? 0 : (($result["sdq_pros"] >= 8) ? 2 : 1);
	$res["indi_percent"] = floor(($result["mops_indi"] / 18) * 100);
	$res["ctrl_percent"] = floor(($result["mops_ctrl"] / 12) * 100);
	$res["abus_percent"] = floor(($result["mops_abus"] / 15) * 100);

	// PRFQ
	$result["prfq_prem"] = 48 - (6 + $data["s5_q1"] + $data["s5_q4"] + $data["s5_q7"] + $data["s5_q10"] + $data["s5_q13"] + $data["s5_q16"]);
	$result["prfq_cerm"] = 48 - (8 + 6 + $data["s5_q2"] + $data["s5_q5"] + $data["s5_q8"] - $data["s5_q11"] + $data["s5_q14"] + $data["s5_q17"]);
	$result["prfq_curi"] = 48 - (8 + 6 + $data["s5_q3"] + $data["s5_q6"] + $data["s5_q9"] + $data["s5_q12"] + $data["s5_q15"] - $data["s5_q18"]);

	$res["prem_state"] = ($result["prfq_prem"] <= 10) ? 0 : (($result["prfq_prem"] >= 21) ? 2 : 1);
	$res["cerm_state"] = ($result["prfq_cerm"] <= 10) ? 0 : (($result["prfq_cerm"] >= 21) ? 2 : 1);
	$res["curi_state"] = ($result["prfq_curi"] <= 10) ? 0 : (($result["prfq_curi"] >= 21) ? 2 : 1);

	// PGASP
	$result["pgasp_gnbe"] = 64 - (8 + $data["s6_q1"] + $data["s6_q6"] + $data["s6_q12"] + $data["s6_q16"] + $data["s6_q19"] + $data["s6_q21"] + $data["s6_q28"] + $data["s6_q30"]);
	$result["pgasp_grep"] = 64 - (8 + $data["s6_q2"] + $data["s6_q5"] + $data["s6_q9"] + $data["s6_q15"] + $data["s6_q18"] + $data["s6_q23"] + $data["s6_q25"] + $data["s6_q32"]);
	$result["pgasp_snse"] = 64 - (8 + $data["s6_q3"] + $data["s6_q8"] + $data["s6_q10"] + $data["s6_q14"] + $data["s6_q17"] + $data["s6_q22"] + $data["s6_q26"] + $data["s6_q31"]);
	$result["pgasp_swit"] = 64 - (8 + $data["s6_q4"] + $data["s6_q7"] + $data["s6_q11"] + $data["s6_q13"] + $data["s6_q20"] + $data["s6_q24"] + $data["s6_q27"] + $data["s6_q29"]);

	$res["gnbe_state"] = ($result["pgasp_gnbe"] <= 14) ? 0 : (($result["pgasp_gnbe"] >= 28) ? 2 : 1);
	$res["grep_state"] = ($result["pgasp_grep"] <= 14) ? 0 : (($result["pgasp_grep"] >= 28) ? 2 : 1);
	$res["snse_state"] = ($result["pgasp_snse"] <= 14) ? 0 : (($result["pgasp_snse"] >= 28) ? 2 : 1);
	$res["swit_state"] = ($result["pgasp_swit"] <= 14) ? 0 : (($result["pgasp_swit"] >= 28) ? 2 : 1);

	// CCNES
	$result["ccnes_diss"] = 72 - (9 + $data["s7_q1"] + $data["s7_q10"] + $data["s7_q18"] + $data["s7_q22"] + $data["s7_q25"] + $data["s7_q32"] + $data["s7_q42"] + $data["s7_q43"] + $data["s7_q52"]);
	$result["ccnes_puni"] = 72 - (9 + $data["s7_q5"] + $data["s7_q12"] + $data["s7_q14"] + $data["s7_q21"] + $data["s7_q29"] + $data["s7_q33"] + $data["s7_q38"] + $data["s7_q47"] + $data["s7_q51"]);
	$result["ccnes_expe"] = 72 - (9 + $data["s7_q2"] + $data["s7_q9"] + $data["s7_q17"] + $data["s7_q24"] + $data["s7_q26"] + $data["s7_q34"] + $data["s7_q41"] + $data["s7_q44"] + $data["s7_q53"]);
	$result["ccnes_emof"] = 72 - (9 + $data["s7_q3"] + $data["s7_q8"] + $data["s7_q15"] + $data["s7_q19"] + $data["s7_q27"] + $data["s7_q36"] + $data["s7_q40"] + $data["s7_q45"] + $data["s7_q49"]);
	$result["ccnes_prof"] = 72 - (9 + $data["s7_q6"] + $data["s7_q11"] + $data["s7_q13"] + $data["s7_q20"] + $data["s7_q30"] + $data["s7_q35"] + $data["s7_q37"] + $data["s7_q48"] + $data["s7_q50"]);
	$result["ccnes_mini"] = 72 - (9 + $data["s7_q4"] + $data["s7_q7"] + $data["s7_q16"] + $data["s7_q23"] + $data["s7_q28"] + $data["s7_q31"] + $data["s7_q39"] + $data["s7_q46"] + $data["s7_q54"]);

	$arr3 = array($result["ccnes_diss"], $result["ccnes_puni"], $result["ccnes_expe"], $result["ccnes_emof"], $result["ccnes_prof"], $result["ccnes_mini"]);
	$arr3_sort = $arr3;
	sort($arr3_sort);

	if ($arr3_sort[4] == $arr3_sort[5]) {
	   $res["ccnes_max"] = array_keys($arr3_sort, $arr3_sort[5])[0];
	   $res["ccnes_secmax"] = array_keys($arr3_sort, $arr3_sort[5])[1];
	} else {
	   $res["ccnes_max"] = array_search($arr3_sort[5], $arr3);
	   $res["ccnes_secmax"] = array_search($arr3_sort[4], $arr3);
	}

	/*
	$res["diss_state"] = ($result["ccnes_diss"] <= 14) ? 0 : (($result["ccnes_diss"] >= 32) ? 2 : 1);
	$res["puni_state"] = ($result["ccnes_puni"] <= 14) ? 0 : (($result["ccnes_puni"] >= 32) ? 2 : 1);
	$res["expe_state"] = ($result["ccnes_expe"] <= 14) ? 0 : (($result["ccnes_expe"] >= 32) ? 2 : 1);
	$res["emof_state"] = ($result["ccnes_emof"] <= 14) ? 0 : (($result["ccnes_emof"] >= 32) ? 2 : 1);
	$res["prof_state"] = ($result["ccnes_prof"] <= 14) ? 0 : (($result["ccnes_prof"] >= 32) ? 2 : 1);
	$res["mini_state"] = ($result["ccnes_mini"] <= 14) ? 0 : (($result["ccnes_mini"] >= 32) ? 2 : 1);
	*/

	$res["section"] = 'parent';
	$res["timestamp"] = time();
	$res["status"] = 201;

	echo json_encode($res);

	savefile('parent_db.json', $data);

} else {
	echo "{}";
}

?>