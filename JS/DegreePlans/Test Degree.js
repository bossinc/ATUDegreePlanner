var initialCourseArray = new Array();
TestDegree = [
    {"name":"ENGL1013","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"1","label":"ENGL 1013","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ENGL&number=1013"},
    {"name":"TECH1001","seasonRestrict":"n","hours":"1","Prereqs":"end","summer":"1","label":"TECH 1001","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=TECH&number=1001"},
    {"name":"COMS1403","seasonRestrict":"n","hours":"3","Prereqs":"co|COMS1411|end","summer":"0","label":"COMS 1403","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=1403"},
    {"name":"COMS1411","seasonRestrict":"n","hours":"1","Prereqs":"co|COMS1403|end","summer":"0","label":"COMS 1411","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=1411"},
    {"name":"ENGL1023","seasonRestrict":"n","hours":"3","Prereqs":"ENGL1013|end","summer":"1","ULE":"1","label":"ENGL 1023","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ENGL&number=1023"},
    {"name":"MATH2914","seasonRestrict":"n","hours":"4","Prereqs":"end","summer":"1","ULE":"1","label":"Math 2914","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=MATH&number=2914"},
    {"name":"COMS2003","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","label":"COMS 2003","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2003"},
    {"name":"COMS2104","seasonRestrict":"n","hours":"4","Prereqs":"COMS1403|COMS1411|end","summer":"0","ULE":"1","label":"COMS 2104","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2104"},
    {"name":"GE_FAH1","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"Fine Arts","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements"},
    {"name":"GE_HIST1","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"History","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements"},
    {"name":"GE_SOCS1","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"SocScience","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements"},
    {"name":"ELEG2130","seasonRestrict":"n","hours":"0","Prereqs":"co|ELEG2134|co|COMS2104|end","summer":"0","label":"ELEG 2130","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ELEG&number=2130"},
    {"name":"ELEG2134","seasonRestrict":"n","hours":"4","Prereqs":"co|ELEG2130|co|COMS2104|end","summer":"0","label":"ELEG 2134","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ELEG&number=2134"},
    {"name":"MATH2924","seasonRestrict":"n","hours":"4","Prereqs":"MATH2914|end","summer":"1","label":"MATH 2924","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=MATH&number=2924"},
    {"name":"COMS2203","seasonRestrict":"n","hours":"3","Prereqs":"COMS2104|end","summer":"0","ULE":"1","label":"COMS 2203","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2203"},
    {"name":"COMS2903","seasonRestrict":"n","hours":"3","Prereqs":"COMS2104|end","summer":"0","ULE":"1","label":"COMS 2903","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2903"},
    {"name":"ENGL2053","seasonRestrict":"n","hours":"3","Prereqs":"ENGL1013|ENGL1023|end","summer":"1","label":"ENGL 2053","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ENGL&number=2053"},
    {"name":"GE_SS1","seasonRestrict":"n","hours":"4","Prereqs":"end","summer":"1","ULE":"2","label":"Science 1","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements"},
    {"name":"COMS2213","seasonRestrict":"n","hours":"3","Prereqs":"COMS2203|COMS2903|end","summer":"0","label":"COMS 2213","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2213"},
    {"name":"COMS2223","seasonRestrict":"s","hours":"3","Prereqs":"COMS2203|ELEG2134|end","summer":"0","label":"COMS 2223","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2223"},
    {"name":"COMS3913","seasonRestrict":"s","hours":"3","Prereqs":"COMS2203|COMS2903|MATH2914|end","summer":"0","label":"COMS 3913","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3913"},
    {"name":"GE_SS2","seasonRestrict":"n","hours":"4","Prereqs":"GE_SS1|end","summer":"1","ULE":"2","label":"Science 2","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements"},
    {"name":"MATH3153","seasonRestrict":"n","hours":"3","Prereqs":"MATH2924|end","summer":"0","label":"MATH 3153","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=MATH&number=3153"},
    {"name":"COMS2700","seasonRestrict":"n","hours":"0","Prereqs":"co|COMS2703|COMS1411|COMS1403|end","summer":"0","label":"COMS 2700","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2700"},
    {"name":"COMS2703","seasonRestrict":"n","hours":"3","Prereqs":"co|COMS2700|COMS1411|COMS1403|end","summer":"0","label":"COMS 2703","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2703"},
    {"name":"COMS3213","seasonRestrict":"f","hours":"3","Prereqs":"COMS2213|COMS3913|end","summer":"0","label":"COMS 3213","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3213"},
    {"name":"COMS3233","seasonRestrict":"n","hours":"3","Prereqs":"COMS2003|COMS2203|COMS2903|end","summer":"0","label":"COMS 3233","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3233"},
    {"name":"GE_FAH2","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"Fine Arts","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements"},
    {"name":"SPH2173","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","label":"SPH 2173","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=SPH&number=2173"},
    {"name":"COMS3703","seasonRestrict":"s","hours":"3","Prereqs":"COMS2213|COMS2223|end","summer":"0","label":"COMS 3703","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3703"},
    {"name":"COMS4163","seasonRestrict":"s","hours":"3","Prereqs":"COMS3213|end","summer":"0","label":"COMS 4163","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4163"},
    {"name":"COMS4700","seasonRestrict":"n","hours":"0","Prereqs":"co|COMS4703|COMS2703|COMS2903|COMS2223|end","summer":"0","label":"COMS 4700","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4700"},
    {"name":"COMS4703","seasonRestrict":"n","hours":"3","Prereqs":"co|COMS4700|COMS2703|COMS2903|COMS2223|end","summer":"0","label":"COMS 4703","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4703"},
    {"name":"GE_SOCS2","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"SocScience","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements"},
    {"name":"MATH4003","seasonRestrict":"n","hours":"3","Prereqs":"MATH2924|end","summer":"0","label":"MATH 4003","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=MATH&number=4003"},
    {"name":"COMS3053","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"0","ULE":"1","label":"COMS 3053","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3503"},
    {"name":"COMS4033","seasonRestrict":"n","hours":"3","Prereqs":"COMS3233|end","summer":"0","label":"COMS 4033","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4033"},
    {"name":"COMS4103","seasonRestrict":"f","hours":"3","Prereqs":"COMS2213|COMS2223|COMS2319|end","summer":"0","label":"COMS 4103","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4103"},
    {"name":"COMS4043","seasonRestrict":"n","hours":"3","Prereqs":"COMS4033|end","summer":"0","label":"COMS 4043","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4043"},
    {"name":"COMS4403","seasonRestrict":"s","hours":"3","Prereqs":"COMS2223|COMS3213|COMS4103|end","summer":"0","label":"COMS 4403","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4403"},
    {"name":"GE_MGMT","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"MGMT Elect","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements"},
    {"name":"GE_STEM","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"Math/Sci","link":"https:\/\/www.atu.edu\/academics\/catalog\/colleges\/applied_sciences\/dept_comp_info_sci.html#ComputerScience"},
    {"name":"GE_UPPR","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"Upper Level","link":"https:\/\/www.atu.edu\/academics\/catalog\/colleges\/applied_sciences\/dept_comp_info_sci.html#ComputerScience"},
    false];