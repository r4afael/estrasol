<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html; charset=iso-8859-1');

include ("conexion.php");

$handle = fopen("BDD OMNI GDV W1 W2 W3 W4 W5 W6 DATA (Mas Tribu y Ola)1.csv", "r");
fgetcsv ($handle); //Omitimos la primer linea (Encabezados)
	 
while( ($data = fgetcsv($handle, 0,",") ) !== FALSE )
{
    
    $codigos1 = "INSERT INTO codigos5 (id,CaseId,Ola_Cliente,Ola_GDV,Tribu,CatID,SubCatID,Anio,Mes,Dia,METODO,WALMEX_ON,B1,AREA_N,B2,B2RANGO,B3,NIVEL,B5C1,B5C2,B5C3,B5C4,B5C5,B5C6,B5C7,B5C8,B6C1,B6C2,B6C3,B6C4,B6C5,B6C6,B6C7,B6C8,B6C9,B6C10,B6C11,B6C12,B6C13,B6C14,B6C15,B6C16,B6C17,B6C18,B6C19,B6C20,B6C21,B6C22,B6C23,B6C24,B6C25,B6C26,B6C27,B6C28,B6C29,B6C30,B6C31,B6C32,B6C33,B6C34,B6C35,B6C36,B6C37,B6C38,B6C39,B6C40,B6C41,B6C42,B6C43,B6C44,B6C45,B6C46,B6C47,B6C48,B7C1,B7C2,B7C3,B7C4,B7C5,B7C6,B7C7,B7C8,B7C9,B7C10,B7C11,B7C12,B7C13,B7C14,B7C15,B7C16,B7C17,B7C18,B7C19,B7C20,B7C21,B7C22,B7C23,B7C24,B7C25,B7C26,B7C27,B7C28,B7C29,B7C30,B7C31,B7C32,B7C33,C1O,C1C1,C1C2,C1C3,C1C4,C1C5,C1C6,C1C7,C1C8,C1C9,C1C10,C1C11,C1C12,C1C13,C1C14,C1C15,C1C16,C1C17,C1C17O,C2_TXT,C2_01,C2_02,C2_03,C2_04,C2_05,C2_06,C2_07,C2_08,C2_09,C2_10,C2_11,C2_12,C2_13,C2_14,C2_15,C3_TXT,C3_01,C3_02,C3_03,C3_04,C3_05,C3_06,C4_A1,C4_A2,C4_A3,C4_A4,C4_A5,C4_A6,C4_A7,C4_A8,C4_A9,C4_A10,C4_A11,C4_A12,C4_A13,C4_A14,C4_A15,C4_A16,C4_A17,C4_A18,C4_A19,C4_A20,C4_A21,C4_A22,C4_A23,D1,D2,D2O,D3,D4,D5,D5_NPS_TIPO,D6,D6O,O_D6c1,O_D6c2,O_D6c3,O_D6c4,O_D6c5,O_D6c6,O_D6c7,O_D6c8,O_D6c9,O_D6c10,E1O,E1C1,E1C2,E1C3,E1C4,E1C5,E1C6,E1C7,E1C8,E1C9,E1C10,E1C11,E1C12,E1C13,E1C14,E1C15,E1C16,E1C17,E1C18,E1C19,E1C20,E1C21,E1C22,E1C23,E2,E2O,E3O,E3C1,E3C2,E3C3,E3C4,E3C5,E3C6,E3C7,E3C8,E3C9,E3C10,E3C11,E3C12,E3C13,E3C14,E3C15,E3C16,E3C17,E3C18,E3C19,E3C20,E3AM1,E3AM2,E3AM3,E3AM4,E3AM5,E3AM6,E3AM7,E3AM8,E3AM9,E3AM10,E3AM11,E3AM12,E3AM13,E3AM14,E3AM15,E3AM16,E3AM17,E3AM18,E3AM19,E3AM20,E4O,E4C1,E4C2,E4C3,E4C4,E4C5,E4C6,E4C7,E4C8,E4C9,E4C10,E4C11,E4C11O,E4AM1,E4AM2,E4AM3,E4AM4,E4AM5,E4AM6,E4AM7,E4AM8,E4AM9,E4AM10,E4AM11,E5_1,E5_2,E5_3,E5_4,E5_5,E5_6,E5_7,E5_8,E5_9,E5_10,E6,E6O,E_AH_C1,E_AH_C2,E_AH_C3,E_AH_C4,E_AH_C5,E_AH_C6,E_AH_C7,E_AH_C8,E_AH_C9,E_AH_C10,E_AH_C11,E_AH_C12,E_AH_C13,E_AH_C14,E_AH_C15,E_AH_C16,E_AH_C17,E_AH_C18,E_AH_C19,E_AH_C20,E_AH_C21,E_AH_C22,E_AH_C23,E_AH_C24,E_AH_C25,E_AH_C26,E_AH_C27,E_AH_C28,E_AH_C29,E_AH_C30,E_AH_C31,E_AH_C32,E_AH_C33,E_AH_C34,E_AH_C35,E_AH_C36,E_AH_C37,E_AH_C38,E_AH_C39,E_AH_C40,E_AH_C41,E_AH_C42,E_AH_C43,E_AH_C44,E_AH_C45,E_AH_C46,E_AH_C47,E_AH_C48,E_AH_C49,E_AH_C50,E_AH_C51,E_AH_C52,E_AH_C53,E_AH_C54,E_AH_C55,E_AH_C56,E_AH_C57,E_AH_C58,E_AH_C59,E_AH_C60,E_AH_C61,E_AH_C62,E_AH_C63,E_AH_C64,E_AH_C65,E_AH_C66,E_AH_C67,E_AH_C68,E_AH_C69,E_AH_C70,E_AH_C71,E_AH_C72,E_AH_C73,E11,E11_B,E12,E12O,E13,E14,E14_O,E15,E16,E17,E18C1,E18C2,E18C3,E18C4,E18C5,E18C6,E18C7,E18C8,E18C9,E18C10,E18C11,E18C12,E18C13,E18C14,E18C15,E18C16,E18C17,E18C18,E18C19,E18C20,E18_NOC1,E18_NOC2,E18_NOC3,E18_NOC4,E18_NOC5,E18_NOC6,E18_NOC7,E18_NOC8,E18_NOC9,E18_NOC10,E18_NOC11,E18_NOC12,E18_NOC13,E18_NOC14,E18_NOC15,E18_NOC16,E18_NOC17,E18_NOC18,E18_NOC19,E19,E19O,F1C1,F1C2,F1C3,F1C4,F1C5,F1C6,F1C7,F1C8,F1C9,F1C10,F1C11,F1C12,F1C13,F1C14,F1C15,F1C16,F1C17,F1C18,F1C19,F2O,F2C1,F2C2,F2C3,F2C4,F2C5,F2C6,F2C6O,O_F2_M1,O_F2_M2,O_F2_M3,O_F2_M4,O_F2_M5,O_F2_M6,O_F2_M7,O_F2_M8,F3_A1,F3_A1c1,F3_A1c2,F3_A1c3,F3_A1c4,F3_A1c5,F3_A1c6,F3_A1c7,F3_A1c8,F3_A2,F3_A2c1,F3_A2c2,F3_A2c3,F3_A2c4,F3_A2c5,F3_A2c6,F3_A2c7,F3_A2c8,F3_A3,F3_A3c1,F3_A3c2,F3_A3c3,F3_A3c4,F3_A3c5,F3_A3c6,F3_A3c7,F3_A3c8,F3_A4,F3_A4c1,F3_A4c2,F3_A4c3,F3_A4c4,F3_A4c5,F3_A4c6,F3_A4c7,F3_A4c8,F3_A6,F3_A6c1,F3_A6c2,F3_A6c3,F3_A6c4,F3_A6c5,F3_A6c6,F3_A6c7,F3_A6c8,Ola) values ('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]','$data[7]','$data[8]','$data[9]','$data[10]','$data[11]','$data[12]','$data[13]','$data[14]','$data[15]','$data[16]','$data[17]','$data[18]','$data[19]','$data[20]','$data[21]','$data[22]','$data[23]','$data[24]','$data[25]','$data[26]','$data[27]','$data[28]','$data[29]','$data[30]','$data[31]','$data[32]','$data[33]','$data[34]','$data[35]','$data[36]','$data[37]','$data[38]','$data[39]','$data[40]','$data[41]','$data[42]','$data[43]','$data[44]','$data[45]','$data[46]','$data[47]','$data[48]','$data[49]','$data[50]','$data[51]','$data[52]','$data[53]','$data[54]','$data[55]','$data[56]','$data[57]','$data[58]','$data[59]','$data[60]','$data[61]','$data[62]','$data[63]','$data[64]','$data[65]','$data[66]','$data[67]','$data[68]','$data[69]','$data[70]','$data[71]','$data[72]','$data[73]','$data[74]','$data[75]','$data[76]','$data[77]','$data[78]','$data[79]','$data[80]','$data[81]','$data[82]','$data[83]','$data[84]','$data[85]','$data[86]','$data[87]','$data[88]','$data[89]','$data[90]','$data[91]','$data[92]','$data[93]','$data[94]','$data[95]','$data[96]','$data[97]','$data[98]','$data[99]','$data[100]','$data[101]','$data[102]','$data[103]','$data[104]','$data[105]','$data[106]','$data[107]','$data[108]','$data[109]','$data[110]','$data[111]','$data[112]','$data[113]','$data[114]','$data[115]','$data[116]','$data[117]','$data[118]','$data[119]','$data[120]','$data[121]','$data[122]','$data[123]','$data[124]','$data[125]','$data[126]','$data[127]','$data[128]','$data[129]','$data[130]','$data[131]','$data[132]','$data[133]','$data[134]','$data[135]','$data[136]','$data[137]','$data[138]','$data[139]','$data[140]','$data[141]','$data[142]','$data[143]','$data[144]','$data[145]','$data[146]','$data[147]','$data[148]','$data[149]','$data[150]','$data[151]','$data[152]','$data[153]','$data[154]','$data[155]','$data[156]','$data[157]','$data[158]','$data[159]','$data[160]','$data[161]','$data[162]','$data[163]','$data[164]','$data[165]','$data[166]','$data[167]','$data[168]','$data[169]','$data[170]','$data[171]','$data[172]','$data[173]','$data[174]','$data[175]','$data[176]','$data[177]','$data[178]','$data[179]','$data[180]','$data[181]','$data[182]','$data[183]','$data[184]','$data[185]','$data[186]','$data[187]','$data[188]','$data[189]','$data[190]','$data[191]','$data[192]','$data[193]','$data[194]','$data[195]','$data[196]','$data[197]','$data[198]','$data[199]','$data[200]','$data[201]','$data[202]','$data[203]','$data[204]','$data[205]','$data[206]','$data[207]','$data[208]','$data[209]','$data[210]','$data[211]','$data[212]','$data[213]','$data[214]','$data[215]','$data[216]','$data[217]','$data[218]','$data[219]','$data[220]','$data[221]','$data[222]','$data[223]','$data[224]','$data[225]','$data[226]','$data[227]','$data[228]','$data[229]','$data[230]','$data[231]','$data[232]','$data[233]','$data[234]','$data[235]','$data[236]','$data[237]','$data[238]','$data[239]','$data[240]','$data[241]','$data[242]','$data[243]','$data[244]','$data[245]','$data[246]','$data[247]','$data[248]','$data[249]','$data[250]','$data[251]','$data[252]','$data[253]','$data[254]','$data[255]','$data[256]','$data[257]','$data[258]','$data[259]','$data[260]','$data[261]','$data[262]','$data[263]','$data[264]','$data[265]','$data[266]','$data[267]','$data[268]','$data[269]','$data[270]','$data[271]','$data[272]','$data[273]','$data[274]','$data[275]','$data[276]','$data[277]','$data[278]','$data[279]','$data[280]','$data[281]','$data[282]','$data[283]','$data[284]','$data[285]','$data[286]','$data[287]','$data[288]','$data[289]','$data[290]','$data[291]','$data[292]','$data[293]','$data[294]','$data[295]','$data[296]','$data[297]','$data[298]','$data[299]','$data[300]','$data[301]','$data[302]','$data[303]','$data[304]','$data[305]','$data[306]','$data[307]','$data[308]','$data[309]','$data[310]','$data[311]','$data[312]','$data[313]','$data[314]','$data[315]','$data[316]','$data[317]','$data[318]','$data[319]','$data[320]','$data[321]','$data[322]','$data[323]','$data[324]','$data[325]','$data[326]','$data[327]','$data[328]','$data[329]','$data[330]','$data[331]','$data[332]','$data[333]','$data[334]','$data[335]','$data[336]','$data[337]','$data[338]','$data[339]','$data[340]','$data[341]','$data[342]','$data[343]','$data[344]','$data[345]','$data[346]','$data[347]','$data[348]','$data[349]','$data[350]','$data[351]','$data[352]','$data[353]','$data[354]','$data[355]','$data[356]','$data[357]','$data[358]','$data[359]','$data[360]','$data[361]','$data[362]','$data[363]','$data[364]','$data[365]','$data[366]','$data[367]','$data[368]','$data[369]','$data[370]','$data[371]','$data[372]','$data[373]','$data[374]','$data[375]','$data[376]','$data[377]','$data[378]','$data[379]','$data[380]','$data[381]','$data[382]','$data[383]','$data[384]','$data[385]','$data[386]','$data[387]','$data[388]','$data[389]','$data[390]','$data[391]','$data[392]','$data[393]','$data[394]','$data[395]','$data[396]','$data[397]','$data[398]','$data[399]','$data[400]','$data[401]','$data[402]','$data[403]','$data[404]','$data[405]','$data[406]','$data[407]','$data[408]','$data[409]','$data[410]','$data[411]','$data[412]','$data[413]','$data[414]','$data[415]','$data[416]','$data[417]','$data[418]','$data[419]','$data[420]','$data[421]','$data[422]','$data[423]','$data[424]','$data[425]','$data[426]','$data[427]','$data[428]','$data[429]','$data[430]','$data[431]','$data[432]','$data[433]','$data[434]','$data[435]','$data[436]','$data[437]','$data[438]','$data[439]','$data[440]','$data[441]','$data[442]','$data[443]','$data[444]','$data[445]','$data[446]','$data[447]','$data[448]','$data[449]','$data[450]','$data[451]','$data[452]','$data[453]','$data[454]','$data[455]','$data[456]','$data[457]','$data[458]','$data[459]','$data[460]','$data[461]','$data[462]','$data[463]','$data[464]','$data[465]','$data[466]','$data[467]','$data[468]','$data[469]','$data[470]','$data[471]','$data[472]','$data[473]','$data[474]','$data[475]','$data[476]','$data[477]','$data[478]','$data[479]','$data[480]','$data[481]','$data[482]','$data[483]','$data[484]','$data[485]','$data[486]','$data[487]','$data[488]','$data[489]','$data[490]','$data[491]','$data[492]','$data[493]','$data[494]','$data[495]','$data[496]','$data[497]','$data[498]')";
    $result=$mysqli->query($codigos1);
    if ($result){
        echo "insert";
    }
    else
    {
        echo "no insert";
    }
    
    break;
}
fclose($handle);
echo ('GUARDO 1');