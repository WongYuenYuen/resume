/**
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: helper
 * @description: 辅助函数
 */

const API_PREFIX = '/c/cont/subject/';

function get_api_url(path, params) {
    if(params) {
        return API_PREFIX + path + '?' + $.param(params);
    }
    else {
        return API_PREFIX + path;
    }
}

function divide(str) {
    var strReverve=(str+'').split('').reverse().join('');
    return strReverve.replace(/(\d{3})/g,'$1,').replace(/(,$)/g,'').split('').reverse().join('');
}

export const yyinfo = navigator.userAgent.match(/.*YY([\/\(])?(ClientVersion:)?([0-9\.]+).*/);

export function api(request) {
    let path = request.path;
    let params = request.params;

    delete request.path;
    delete request.params;

    request.url = get_api_url(path, params);

    return $.ajax(request);
}
