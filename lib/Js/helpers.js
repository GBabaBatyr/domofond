var globalsubs;

NameError=function(name) {
  //console.log(name[1].toLowerCase());
  if (name) {
    for (var i = 0; i < name.length; i++) {
      if (!((name[i]>='A' && name[i]<='Z') ||(name[i]>='a' && name[i]<='z')) &&
      ((name[i].toLowerCase() !='ä' && name[i].toLowerCase()!='ş' && name[i].toLowerCase()!='ý' && name[i].toLowerCase()!='ç' && name[i].toLowerCase()!='ü' && name[i].toLowerCase()!='ň' && name[i].toLowerCase()!='ž' && name[i].toLowerCase()!=' ')))
       return 'Adynyz harplardan ybarat bolmaly'; 
    }
  if (name.length<3) return 'Uzynlygy 3 harpdan kiçi bolup bilmeýär';else 
  if (name.length>20) return 'Loginiň uzunlygy uly';else return '';
  }
  return 'Maglumatlar doly däl';
};

ConpasswordError=function(password,conpassword){
  if (conpassword) {
    if (conpassword==password && password.length>4) return '';else
    return 'Parolynyz gabat gelmeyar';
  }
  return 'Maglumatlar doly däl';
};

PasswordError=function(password){
  if (password) {
    if (password.length<5) return 'Parolynyzyn uzunlygy kiçi';else
    return '';
  }
  return 'Maglumatlar doly däl'
};

LoginError=function(login){
  if (login) {
    if (login.length<5) return 'Loginiň uzunlygy kici';else
    return '';
  }
  return 'Maglumatlar doly däl';
};

TelnumberError=function(telnumber){
  if (telnumber) {
    for (var i = 0; i < telnumber.length; i++) {
      if (!(telnumber[i] in ['1','2','3','4','5','6','7','8','9','0'])) 
        if (telnumber[i]=='+' && i!=0)
        return 'Nomer diňe sanlardan bolup biler';
    }
    if (telnumber.length>17) return 'Nomeriň uzynlygy uly'; else 
    if (telnumber.length<5) return 'Nomeriň uzynlygy kiçi;'; else return '';
  }
  return 'Maglumatlar doly däl';
};
// isfavorite=function(thisId,userId){
  
// }

