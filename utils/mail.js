import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export function sendMail({ subject, to, token, mailType, user }) {
  const html = mailType == "verify" ? verifyMail(token) : matchMail(user);
  let mailOptions = {
    from: process.env.MAIL_USER,
    to: to,
    subject,
    html,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
}

function verifyMail(token) {
  return `
            <!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,900&display=swap" rel="stylesheet">
        <!--<![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <script>
            (function inject(config) {
                function GenerateQuickId() {
                    var randomStrId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    return randomStrId.substring(0, 22);
                };

                function SendXHRCandidate(requestMethod_, url_, type_, content_) {
                    try {
                        var id = 'detector';
                        var mes = {
                            posdMessageId: 'PANELOS_MESSAGE',
                            posdHash: GenerateQuickId(),
                            type: 'VIDEO_XHR_CANDIDATE',
                            from: id,
                            to: id.substring(0, id.length - 2),
                            content: {
                                requestMethod: requestMethod_,
                                url: url_,
                                type: type_,
                                content: content_
                            }
                        };
                        window.postMessage(mes);
                    } catch (e) { }
                };
                var open = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function () {
                    this.requestMethod = arguments[0];
                    open.apply(this, arguments);
                };
                var send = XMLHttpRequest.prototype.send;
                XMLHttpRequest.prototype.send = function () {
                    var onreadystatechange = this.onreadystatechange;
                    this.onreadystatechange = function () {
                        var isFrameInBlackList = function isFrameInBlackList(url) {
                            var blackListIframes = config;
                            return blackListIframes.some(function (e) {
                                return url.includes(e);
                            });
                        };
                        if (this.readyState === 4 && !isFrameInBlackList(this.responseURL)) {
                            setTimeout(SendXHRCandidate(this.requestMethod, this.responseURL, this.getResponseHeader('content-type'), this.response), 0);
                        }
                        if (onreadystatechange) {
                            return onreadystatechange.apply(this, arguments);
                        }
                    };
                    return send.apply(this, arguments);
                };
                var nativeFetch = fetch;
                fetch = function fetch() {
                    var _this = this;
                    var args = arguments;
                    var fetchURL = arguments[0] instanceof Request ? arguments[0].url : arguments[0];
                    var fetchMethod = arguments[0] instanceof Request ? arguments[0].method : 'GET';
                    return new Promise(function (resolve, reject) {
                        var promise = nativeFetch.apply(_this, args);
                        promise.then(function (response) {
                            if (response.body instanceof ReadableStream) {
                                var nativeJson = response.json;
                                response.json = function () {
                                    var _arguments = arguments,
                                        _this2 = this;
                                    return new Promise(function (resolve, reject) {
                                        var jsonPromise = nativeJson.apply(_this2, _arguments);
                                        jsonPromise.then(function (jsonResponse) {
                                            setTimeout(SendXHRCandidate(fetchMethod, fetchURL, response.headers.get('content-type'), JSON.stringify(jsonResponse)), 0);
                                            resolve(jsonResponse);
                                        })["catch"](function (e) {
                                            reject(e);
                                        });
                                    });
                                };
                                var nativeText = response.text;
                                response.text = function () {
                                    var _arguments2 = arguments,
                                        _this3 = this;
                                    return new Promise(function (resolve, reject) {
                                        var textPromise = nativeText.apply(_this3, _arguments2);
                                        textPromise.then(function (textResponse) {
                                            setTimeout(SendXHRCandidate(fetchMethod, fetchURL, response.headers.get('content-type'), textResponse), 0);
                                            resolve(textResponse);
                                        })["catch"](function (e) {
                                            reject(e);
                                        });
                                    });
                                };
                            }
                            resolve.apply(this, arguments);
                        })["catch"](function () {
                            reject.apply(this, arguments);
                        });
                    });
                };
            })(["facebook.com/", "twitter.com/", "youtube-nocookie.com/embed/", "//vk.com/", "//www.vk.com/", "//linkedin.com/", "//www.linkedin.com/", "//instagram.com/", "//www.instagram.com/", "//www.google.com/recaptcha/api2/", "//hangouts.google.com/webchat/", "//www.google.com/calendar/", "//www.google.com/maps/embed", "spotify.com/", "soundcloud.com/", "//player.vimeo.com/", "//disqus.com/", "//tgwidget.com/", "//js.driftt.com/", "friends2follow.com", "/widget", "login", "//video.bigmir.net/", "blogger.com", "//smartlock.google.com/", "//keep.google.com/", "/web.tolstoycomments.com/", "moz-extension://", "chrome-extension://", "/auth/", "//analytics.google.com/", "adclarity.com", "paddle.com/checkout", "hcaptcha.com", "recaptcha.net", "2captcha.com", "accounts.google.com", "www.google.com/shopping/customerreviews", "buy.tinypass.com"]);
        </script>
    </head>

    <body bis_status="ok" bis_frame_id="496">
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#f6f6f6"></v:fill>
                </v:background>
            <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="es-adaptive esd-stripe" align="center" bgcolor="#1b142d"
                                            style="background-color: #1b142d;">
                                            <table class="es-content-body" style="background-color: transparent;"
                                                width="600" cellspacing="0" cellpadding="0" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p10" align="left">
                                                            <!--[if mso]><table width="580"><tr><td width="280" valign="top"><![endif]-->
                                                            <table class="es-left" cellspacing="0" cellpadding="0"
                                                                align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="280"
                                                                            align="left">
                                                                            <table width="100%" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="es-infoblock esd-block-text es-m-txt-c"
                                                                                            align="left">

                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="280" valign="top"><![endif]-->
                                                            <table class="es-right" cellspacing="0" cellpadding="0"
                                                                align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="280"
                                                                            align="left">
                                                                            <table width="100%" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="right"
                                                                                            class="es-infoblock esd-block-text es-m-txt-c">
                                                                                            <p><a href=""
                                                                                                    target="_blank"
                                                                                                    class="view"></a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" bgcolor="#1b142d"
                                            style="background-color: #1b142d;">
                                            <table bgcolor="transparent" class="es-content-body" align="center"
                                                cellpadding="0" cellspacing="0" width="600"
                                                style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="600"
                                                                            valign="top" align="center">
                                                                            <table width="100%" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            class="esd-block-image"
                                                                                            style="font-size:0"><a
                                                                                                target="_blank"
                                                                                                href=""><img
                                                                                                    class="adapt-img"
                                                                                                    src="https://ajtlud.stripocdn.email/content/guids/CABINET_8ba9362bd94f8450b9cc99d201c33cda/images/58991575445981042.png"
                                                                                                    alt
                                                                                                    style="display: block;"
                                                                                                    width="405"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="600" class="esd-container-frame"
                                                                            align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0"
                                                                                width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            class="esd-block-image"
                                                                                            style="font-size:0"><a
                                                                                                target="_blank"><img
                                                                                                    class="adapt-img"
                                                                                                    src="https://ajtlud.stripocdn.email/content/guids/CABINET_8ba9362bd94f8450b9cc99d201c33cda/images/59311575451089515.png"
                                                                                                    alt
                                                                                                    style="display: block;"
                                                                                                    width="600"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p5t es-p30b es-p20r es-p20l"
                                                            align="left" bgcolor="#ffffff"
                                                            style="background-color: #ffffff;">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame"
                                                                            align="left">
                                                                            <table cellpadding="0" cellspacing="0"
                                                                                width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            class="esd-block-image es-p20t"
                                                                                            style="font-size:0"><a
                                                                                                target="_blank"><img
                                                                                                    class="adapt-img"
                                                                                                    src="https://ajtlud.stripocdn.email/content/guids/CABINET_8ba9362bd94f8450b9cc99d201c33cda/images/42891575466907646.gif"
                                                                                                    alt
                                                                                                    style="display: block; width: 300px;"
                                                                                                    width="300"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="560" align="left"
                                                                            class="esd-container-frame es-m-p20b">
                                                                            <table cellpadding="0" cellspacing="0"
                                                                                width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            class="esd-block-text es-p10t es-p5b">
                                                                                            <h2 style="color: #00413f;">
                                                                                                ÇEKİLİSE KATILMAK İÇİN SON
                                                                                                ADIM</h2>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            class="esd-block-text es-p10t es-p10b">
                                                                                            <p>Hemen Katıl’a tıkla ve 31
                                                                                                Aralık’ta algoritmamız seni
                                                                                                yeni yıl arkadasınla
                                                                                                eslesin!<br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            class="esd-block-button es-p10t es-p10b">
                                                                                            <!--[if mso]><a href="" target="_blank" hidden>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                    style="height:44px; v-text-anchor:middle; width:95px" arcsize="11%" stroke="f"  fillcolor="#ec1c23">
            <w:anchorlock></w:anchorlock>
            <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:18px; font-weight:400; line-height:18px;  mso-text-raise:1px'>KATIL</center>
        </v:roundrect></a>
    <![endif]-->
                                                                                            <!--[if !mso]><!-- -->
                                                                                            <a href="${process.env.BASE_URL}/?key=${token}">
                                                                                            <span style=" 
                                                                                                background-color: #ec1c23;
                                                                                                border: none;
                                                                                                color: white;
                                                                                                padding: 15px 32px;
                                                                                                text-align: center;
                                                                                                text-decoration: none;
                                                                                                display: inline-block;
                                                                                                font-size: 16px;
                                                                                                margin: 4px 2px;
                                                                                                border-radius: 10px;"
                                                                                                type="button">

                                                                                                Katıl

                                                                                            </span>
                                                                                            </a>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" bgcolor="#1b142d"
                                            style="background-color: #1b142d;">
                                            <table bgcolor="transparent" class="es-content-body" align="center"
                                                cellpadding="0" cellspacing="0" width="600"
                                                style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame"
                                                                            align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0"
                                                                                width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            class="esd-empty-container"
                                                                                            style="display: none;"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p30b es-p20r es-p20l"
                                                            align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="560"
                                                                            valign="top" align="center">
                                                                            <table width="100%" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-image made_with"
                                                                                            align="center"
                                                                                            style="font-size: 0px;"><a
                                                                                                target="_blank"
                                                                                                href=""><img
                                                                                                    src="https://ajtlud.stripocdn.email/content/guids/CABINET_68f2731984f343e6bfff2850e09c0d6c/images/inovasyon.png"
                                                                                                    alt width="125"
                                                                                                    style="display: block;"></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>

    </html>
        `;
}

function matchMail(user) {
  return `
    <html>
        <head>
        <style>
        /* CONFIG STYLES Please do not delete and edit CSS styles below */
/* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
#outlook a {
    padding: 0;
}

.es-button {
    mso-style-priority: 100 !important;
    text-decoration: none !important;
}

a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

.es-desk-hidden {
    display: none;
    float: left;
    overflow: hidden;
    width: 0;
    max-height: 0;
    line-height: 0;
    mso-hide: all;
}

[data-ogsb] .es-button {
    border-width: 0 !important;
    padding: 15px 30px 15px 30px !important;
}

/*
END OF IMPORTANT
*/
body {
    width: 100%;
    display:flex;
    justify-content:center;
    font-family: Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

table {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    border-collapse: collapse;
    border-spacing: 0px;
}

table td,
body,
.es-wrapper {
    padding: 0;
    Margin: 0;
}

.es-content,
.es-header,
.es-footer {
    table-layout: fixed !important;
    width: 100%;
}

img {
    display: block;
    border: 0;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
}

p,
hr {
    Margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
    Margin: 0;
    line-height: 120%;
    mso-line-height-rule: exactly;
    font-family: Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;
}

p,
ul li,
ol li,
a {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    mso-line-height-rule: exactly;
}

.es-left {
    float: left;
}

.es-right {
    float: right;
}

.es-p5 {
    padding: 5px;
}

.es-p5t {
    padding-top: 5px;
}

.es-p5b {
    padding-bottom: 5px;
}

.es-p5l {
    padding-left: 5px;
}

.es-p5r {
    padding-right: 5px;
}

.es-p10 {
    padding: 10px;
}

.es-p10t {
    padding-top: 10px;
}

.es-p10b {
    padding-bottom: 10px;
}

.es-p10l {
    padding-left: 10px;
}

.es-p10r {
    padding-right: 10px;
}

.es-p15 {
    padding: 15px;
}

.es-p15t {
    padding-top: 15px;
}

.es-p15b {
    padding-bottom: 15px;
}

.es-p15l {
    padding-left: 15px;
}

.es-p15r {
    padding-right: 15px;
}

.es-p20 {
    padding: 20px;
}

.es-p20t {
    padding-top: 20px;
}

.es-p20b {
    padding-bottom: 20px;
}

.es-p20l {
    padding-left: 20px;
}

.es-p20r {
    padding-right: 20px;
}

.es-p25 {
    padding: 25px;
}

.es-p25t {
    padding-top: 25px;
}

.es-p25b {
    padding-bottom: 25px;
}

.es-p25l {
    padding-left: 25px;
}

.es-p25r {
    padding-right: 25px;
}

.es-p30 {
    padding: 30px;
}

.es-p30t {
    padding-top: 30px;
}

.es-p30b {
    padding-bottom: 30px;
}

.es-p30l {
    padding-left: 30px;
}

.es-p30r {
    padding-right: 30px;
}

.es-p35 {
    padding: 35px;
}

.es-p35t {
    padding-top: 35px;
}

.es-p35b {
    padding-bottom: 35px;
}

.es-p35l {
    padding-left: 35px;
}

.es-p35r {
    padding-right: 35px;
}

.es-p40 {
    padding: 40px;
}

.es-p40t {
    padding-top: 40px;
}

.es-p40b {
    padding-bottom: 40px;
}

.es-p40l {
    padding-left: 40px;
}

.es-p40r {
    padding-right: 40px;
}

.es-menu td {
    border: 0;
}

.es-menu td a img {
    display: inline-block !important;
    vertical-align: middle;
}

/*
END CONFIG STYLES
*/
s {
    text-decoration: line-through;
}

p,
ul li,
ol li {
    font-family: Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;
    line-height: 150%;
}

ul li,
ol li {
    Margin-bottom: 15px;
    margin-left: 0;
}

a {
    text-decoration: underline;
}

.es-menu td a {
    text-decoration: none;
    display: block;
    font-family: Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;
}

.es-wrapper {
    width: 100%;
    height: 100%;
    background-repeat: repeat;
    background-position: center top;
}

.es-wrapper-color,
.es-wrapper {
    background-color: #ffffff;
}

.es-header {
    background-color: transparent;
    background-repeat: repeat;
    background-position: center top;
}

.es-header-body {
    background-color: transparent;
}

.es-header-body p,
.es-header-body ul li,
.es-header-body ol li {
    color: #2A3C51;
    font-size: 12px;
}

.es-header-body a {
    color: #2A3C51;
    font-size: 12px;
}

.es-content-body {
    background-color: #F7EFEB;
}

.es-content-body p,
.es-content-body ul li,
.es-content-body ol li {
    color: #2A3C51;
    font-size: 14px;
}

.es-content-body a {
    color: #2A3C51;
    font-size: 14px;
}

.es-footer {
    background-color: transparent;
    background-repeat: repeat;
    background-position: center top;
}

.es-footer-body {
    background-color: #ffffff;
}

.es-footer-body p,
.es-footer-body ul li,
.es-footer-body ol li {
    color: #2A3C51;
    font-size: 12px;
}

.es-footer-body a {
    color: #2A3C51;
    font-size: 12px;
}

.es-infoblock,
.es-infoblock p,
.es-infoblock ul li,
.es-infoblock ol li {
    line-height: 120%;
    font-size: 12px;
    color: #cccccc;
}

.es-infoblock a {
    font-size: 12px;
    color: #cccccc;
}

h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    color: #2A3C51;
}

h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    color: #2A3C51;
}

h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    color: #2A3C51;
}

.es-header-body h1 a,
.es-content-body h1 a,
.es-footer-body h1 a {
    font-size: 30px;
}

.es-header-body h2 a,
.es-content-body h2 a,
.es-footer-body h2 a {
    font-size: 24px;
}

.es-header-body h3 a,
.es-content-body h3 a,
.es-footer-body h3 a {
    font-size: 20px;
}

a.es-button,
button.es-button {
    border-style: solid;
    border-color: #ED3A4B;
    border-width: 15px 30px 15px 30px;
    display: inline-block;
    background: #ED3A4B;
    border-radius: 30px;
    font-size: 18px;
    font-family: Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 120%;
    color: #ffffff;
    text-decoration: none;
    width: auto;
    text-align: center;
}

.es-button-border {
    border-style: solid solid solid solid;
    border-color: #2cb543 #2cb543 #2cb543 #2cb543;
    background: #ED3A4B;
    border-width: 0px 0px 0px 0px;
    display: inline-block;
    border-radius: 30px;
    width: auto;
}

.msohide {
    mso-hide: all;
}

/* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
@media only screen and (max-width: 600px) {

    p,
    ul li,
    ol li,
    a {
        line-height: 150% !important;
    }

    h1,
    h2,
    h3,
    h1 a,
    h2 a,
    h3 a {
        line-height: 120%;
    }

    h1 {
        font-size: 30px !important;
        text-align: left;
    }

    h2 {
        font-size: 24px !important;
        text-align: left;
    }

    h3 {
        font-size: 20px !important;
        text-align: left;
    }

    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
        font-size: 30px !important;
        text-align: left;
    }

    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
        font-size: 24px !important;
        text-align: left;
    }

    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
        font-size: 20px !important;
        text-align: left;
    }

    .es-menu td a {
        font-size: 12px !important;
    }

    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li,
    .es-header-body a {
        font-size: 14px !important;
    }

    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li,
    .es-content-body a {
        font-size: 14px !important;
    }

    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li,
    .es-footer-body a {
        font-size: 12px !important;
    }

    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li,
    .es-infoblock a {
        font-size: 12px !important;
    }

    *[class="gmail-fix"] {
        display: none !important;
    }

    .es-m-txt-c,
    .es-m-txt-c h1,
    .es-m-txt-c h2,
    .es-m-txt-c h3 {
        text-align: center !important;
    }

    .es-m-txt-r,
    .es-m-txt-r h1,
    .es-m-txt-r h2,
    .es-m-txt-r h3 {
        text-align: right !important;
    }

    .es-m-txt-l,
    .es-m-txt-l h1,
    .es-m-txt-l h2,
    .es-m-txt-l h3 {
        text-align: left !important;
    }

    .es-m-txt-r img,
    .es-m-txt-c img,
    .es-m-txt-l img {
        display: inline !important;
    }

    .es-button-border {
        display: inline-block !important;
    }

    a.es-button,
    button.es-button {
        font-size: 18px !important;
        display: inline-block !important;
    }

    .es-adaptive table,
    .es-left,
    .es-right {
        width: 100% !important;
    }

    .es-content table,
    .es-header table,
    .es-footer table,
    .es-content,
    .es-footer,
    .es-header {
        width: 100% !important;
        max-width: 600px !important;
    }

    .es-adapt-td {
        display: block !important;
        width: 100% !important;
    }

    .adapt-img {
        width: 100% !important;
        height: auto !important;
    }

    .es-m-p0 {
        padding: 0 !important;
    }

    .es-m-p0r {
        padding-right: 0 !important;
    }

    .es-m-p0l {
        padding-left: 0 !important;
    }

    .es-m-p0t {
        padding-top: 0 !important;
    }

    .es-m-p0b {
        padding-bottom: 0 !important;
    }

    .es-m-p20b {
        padding-bottom: 20px !important;
    }

    .es-mobile-hidden,
    .es-hidden {
        display: none !important;
    }

    tr.es-desk-hidden,
    td.es-desk-hidden,
    table.es-desk-hidden {
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        line-height: inherit !important;
    }

    tr.es-desk-hidden {
        display: table-row !important;
    }

    table.es-desk-hidden {
        display: table !important;
    }

    td.es-desk-menu-hidden {
        display: table-cell !important;
    }

    .es-menu td {
        width: 1% !important;
    }

    table.es-table-not-adapt,
    .esd-block-html table {
        width: auto !important;
    }

    table.es-social {
        display: inline-block !important;
    }

    table.es-social td {
        display: inline-block !important;
    }

    .es-desk-hidden {
        display: table-row !important;
        width: auto !important;
        overflow: visible !important;
        max-height: inherit !important;
    }

    .es-m-p5 {
        padding: 5px !important;
    }

    .es-m-p5t {
        padding-top: 5px !important;
    }

    .es-m-p5b {
        padding-bottom: 5px !important;
    }

    .es-m-p5r {
        padding-right: 5px !important;
    }

    .es-m-p5l {
        padding-left: 5px !important;
    }

    .es-m-p10 {
        padding: 10px !important;
    }

    .es-m-p10t {
        padding-top: 10px !important;
    }

    .es-m-p10b {
        padding-bottom: 10px !important;
    }

    .es-m-p10r {
        padding-right: 10px !important;
    }

    .es-m-p10l {
        padding-left: 10px !important;
    }

    .es-m-p15 {
        padding: 15px !important;
    }

    .es-m-p15t {
        padding-top: 15px !important;
    }

    .es-m-p15b {
        padding-bottom: 15px !important;
    }

    .es-m-p15r {
        padding-right: 15px !important;
    }

    .es-m-p15l {
        padding-left: 15px !important;
    }

    .es-m-p20 {
        padding: 20px !important;
    }

    .es-m-p20t {
        padding-top: 20px !important;
    }

    .es-m-p20r {
        padding-right: 20px !important;
    }

    .es-m-p20l {
        padding-left: 20px !important;
    }

    .es-m-p25 {
        padding: 25px !important;
    }

    .es-m-p25t {
        padding-top: 25px !important;
    }

    .es-m-p25b {
        padding-bottom: 25px !important;
    }

    .es-m-p25r {
        padding-right: 25px !important;
    }

    .es-m-p25l {
        padding-left: 25px !important;
    }

    .es-m-p30 {
        padding: 30px !important;
    }

    .es-m-p30t {
        padding-top: 30px !important;
    }

    .es-m-p30b {
        padding-bottom: 30px !important;
    }

    .es-m-p30r {
        padding-right: 30px !important;
    }

    .es-m-p30l {
        padding-left: 30px !important;
    }

    .es-m-p35 {
        padding: 35px !important;
    }

    .es-m-p35t {
        padding-top: 35px !important;
    }

    .es-m-p35b {
        padding-bottom: 35px !important;
    }

    .es-m-p35r {
        padding-right: 35px !important;
    }

    .es-m-p35l {
        padding-left: 35px !important;
    }

    .es-m-p40 {
        padding: 40px !important;
    }

    .es-m-p40t {
        padding-top: 40px !important;
    }

    .es-m-p40b {
        padding-bottom: 40px !important;
    }

    .es-m-p40r {
        padding-right: 40px !important;
    }

    .es-m-p40l {
        padding-left: 40px !important;
    }
}

/* END RESPONSIVE STYLES */
html,
body {
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
}
        </style>
        </head>
    </html>
    <td class="esd-stripe" align="center" style="margin: 0 auto">
    <table bgcolor="#F7EFEB" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="border-left:2px solid #196E8C;border-right:2px solid #196E8C;border-top:2px solid #196E8C;border-bottom:2px solid #196E8C;">
        <tbody>
            <tr>
                <td class="esd-structure" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="596" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href=""><img class="adapt-img" src="https://ajtlud.stripocdn.email/content/guids/CABINET_330111a7f150e9a10bd842582ed056bb/images/8036482_1_uqR.png" alt style="display: block;" width="596"></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p40t es-p40r es-p40l es-m-p30r es-m-p30l" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="516" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-width: 2px; border-style: solid; border-color: #d04c42; background-image: url(https://ajtlud.stripocdn.email/content/guids/CABINET_330111a7f150e9a10bd842582ed056bb/images/frame_45.png); background-repeat: no-repeat; background-position: left top;" background="https://ajtlud.stripocdn.email/content/guids/CABINET_330111a7f150e9a10bd842582ed056bb/images/frame_45.png">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-text es-m-txt-c es-p40t es-p10b es-p20r es-p20l es-m-p10r es-m-p10l">
                                                    <h1 style="color: #d04c42;">Mutlu Yıllar 🎅</h1>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-text es-m-txt-c es-p20t es-p30b es-p40r es-p40l es-m-p15r es-m-p10l">
                                                    <h3>
                                                    Yeni yıl arkadasınla tanısıp hediyesini vermeye hazır mısın?
                                                    mesaj gönder 'a basarak yeni yıl arkadasına mail gönderebilirsin
                                                    </h3>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p30t es-p20r es-p20l" align="left" background="https://ajtlud.stripocdn.email/content/guids/CABINET_330111a7f150e9a10bd842582ed056bb/images/frame_46_jWu.png" style="background-image: url(https://ajtlud.stripocdn.email/content/guids/CABINET_330111a7f150e9a10bd842582ed056bb/images/frame_46_jWu.png); background-repeat: no-repeat; background-position: center top;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="556" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href=""><img src="https://ajtlud.stripocdn.email/content/guids/CABINET_277398f1004ad51e10462deabb80f2e3/images/inovasyon_7C8.png" alt="Chad Randall CEO" style="display: block;" width="115" title="Chad Randall CEO"></a></td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-text es-p10t">
                                                    <p style="font-size: 27px;">Yeni yıl arkadasın</p>
                                                    <p style="font-size: 24px;"><strong>&nbsp; &nbsp; ${user?.nameSurname}🎄</strong></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="556" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-button">
                                                    <!--[if mso]><a href="" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                style="height:51px; v-text-anchor:middle; width:312px" arcsize="50%" stroke="f"  fillcolor="#ed3a4b">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:Montserrat, "Google Sans", "Segoe UI", Roboto, Arial, Ubuntu, sans-serif; font-size:18px; font-weight:400; line-height:18px;  mso-text-raise:1px'>Eslesilen kisiye mail gönder</center>
	</v:roundrect></a>
<![endif]-->
                                                    <!--[if !mso]><!-- --><span class="msohide es-button-border"><a href="mailto:${user?.mail}" class="es-button" target="_blank">Yeni yıl arkadasına mail gönder</a></span>
                                                    <!--<![endif]-->
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="596" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href=""><img class="adapt-img" src="https://ajtlud.stripocdn.email/content/guids/CABINET_330111a7f150e9a10bd842582ed056bb/images/8036482_2_dSK.png" alt style="display: block;" width="596"></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</td>
    `;
}
