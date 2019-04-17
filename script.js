function testRegEx(reg,st) {
    let regEx = reg.trim();
    let str = st.trim();
    let missingSlashes = function checkSlash() {
        var pattFirsSlash = /^\//;
        var pattLastSlash = /\/$/;
        var checkFirstSlash = pattFirsSlash.test(regEx);
        var checkSecondSlash = pattLastSlash.test(regEx);
        if (!checkFirstSlash && !checkSecondSlash) alert('Missing slashes');
        else if (!checkFirstSlash)alert('Missing first slash');
        else if (!checkSecondSlash)alert('Missing second slash');
        else return false
    };
    let numberOpenSquareBrackets = function countOpenSquareBrackets() {
        var patt =/\[/g;
        var result =regEx.match(patt);
        if (!result)return 0;
        else return result.length;
    };
    let numberCloseSquareBrackets = function countOpenSquareBrackets() {
        var patt =/\]/g;
        var result =regEx.match(patt);
        if (!result)return 0;
        else return result.length;
    };
    let numberOpenRoundBrackets = function countOpenRoundBrackets() {
        var patt =/\(/g;
        var result =regEx.match(patt);
        if (!result)return 0;
        else return result.length;
    };
    let numberCloseRoundBrackets = function countOpenRoundBrackets() {
        var patt =/\)/g;
        var result =regEx.match(patt);
        if (!result)return 0;
        else return result.length;
    };
    let numberOpenCurveBrackets = function countOpenCurveBrackets() {
        var patt =/\{/g;
        var result =regEx.match(patt);
        if (!result)return 0;
        else return result.length;
    };
    let numberCloseCurveBrackets = function countOpenCurveBrackets() {
        var patt =/\}/g;
        var result =regEx.match(patt);
        if (!result)return 0;
        else return result.length;
    };
    let missingSquareBrackets = numberOpenSquareBrackets() - numberCloseSquareBrackets();
    let missingRoundBrackets = numberOpenRoundBrackets() - numberCloseRoundBrackets();
    let missingCurveBrackets = numberOpenCurveBrackets() - numberCloseCurveBrackets();
    let result;
    if (!missingSquareBrackets && !missingRoundBrackets && !missingCurveBrackets && !missingSlashes()) {
        regEx = regEx.substring(1,regEx.length-1);
        regEx = new RegExp(regEx);
        result = regEx.test(str);
    } else {
        if (missingSquareBrackets>0) alert('Missing ' + missingSquareBrackets +' ]');
        if (missingSquareBrackets<0) alert('Missing ' + Math.abs(missingSquareBrackets) +' [');
        if (missingRoundBrackets>0) alert('Missing ' + missingRoundBrackets + ' )');
        if (missingRoundBrackets<0) alert('Missing ' + Math.abs(missingRoundBrackets) + ' (');
        if (missingCurveBrackets>0) alert('Missing ' + missingCurveBrackets + ' }');
        if (missingCurveBrackets<0) alert('Missing ' + Math.abs(missingCurveBrackets) + ' {');
    }
    if (result) return 'Match';
    else return 'Not Match';
}
