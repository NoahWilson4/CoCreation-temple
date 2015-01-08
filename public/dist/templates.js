this["JST"] = this["JST"] || {};

this["JST"]["cocreation"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="song-outer-container">\n    <div class="song-inner-container">\n        <div class="song-header">\n\t\t\t<canvas id="canvas" class="visuals-main"></canvas>\n\t\t\t<div class="song-info">\n\t\t\t\t<h1> ' +
((__t = (songName)) == null ? '' : __t) +
' </h1>\n\t\t\t\t<p> ' +
((__t = (songDescription)) == null ? '' : __t) +
' </p>\n\t\t\t\t<div class="transport">\n\t\t\t\t\t<button id="play" class="btn btn-lg btn-success"> Play </button>\n\t\t\t\t\t<button id="stop" class="btn btn-lg btn-danger"> Stop </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n        <ul id="tracks"></ul>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["create_user"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n\t<div class="row">\n\t\t<div class="form-group">\n\t\t\t<label class="col-sm-4 control-label" for="name"> Name: </label>\n\t\t\t<div class="col-sm-8">\n\t\t\t\t<input class="form-control" type="text" name="name" placeholder="Musician or Band Name…">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label class="col-sm-4 control-label" for="email"> Email: </label>\n\t\t\t<div class="col-sm-8">\n\t\t\t\t<input  class="form-control" type="email" placeholder="Email…" name="email">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label class="col-sm-4 control-label" for="password"> Password: </label>\n\t\t\t<div class="col-sm-8">\n\t\t\t\t<input class="form-control" type="password" placeholder="Password…" name="password">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label class="col-sm-4 control-label" for="location"> Location: </label>\n\t\t\t<div class="col-sm-8">\n\t\t\t\t<input class="form-control" type="text" name="location" placeholder="Location…">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label class="col-sm-4 control-label" for="birthdate"> Birthdate: </label>\n\t\t\t<div class="col-sm-8">\n\t\t\t\t<input class="form-control" type="date" name="birthdate">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<input type="submit" class="submit">\n\n';

}
return __p
};

this["JST"]["navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="navbar navbar-inverse navbar-fixed-top tonetribe-navbar" role="navigation">\n\n    <div class="container-fluid nav-main">\n        <div class="navbar-header">\n\n            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">\n                <span class="sr-only Toggle navigation"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand"> \n                <div id="tonetribe-logo"><strong>ToneTribe</strong></div>\n            </a>\n        </div>\n        <div class="navbar-collapse collapse pull-left">\n            <ul class="nav navbar-nav">\n                <li><a id="navt" href="/profile-user"> Profile </a></li>\n                <li><a id="navt" href="/live-stream"> LiveStream</a></li>\n                <li><a id="navt" href="/cocreation"> CoCreation</a></li>\n            </ul>\n        </div>    \n        <div class="navbar-collapse collapse pull-right">\n            <ul class="nav navbar-nav navbar-right">\n                <li class="dropdown">\n                    <a id="navt" href="#" class="dropdown-toggle" data-toggle="dropdown"> Connect\n                        <i id="nav-caret" class="fa fa-chevron-down"></i>\n                    </a>\n                    <ul id="dd-menu" class="dropdown-menu" role="menu">\n                        <li><a id="navbar-search" href="/search"> Search for Musicians and Bands </a></li>\n                        <li><a href="/cocreation"> Co-Creation </a></li>\n                        <li><a href="/live-stream"> LiveStream </a></li>\n\n                        <li id="dd-header"> Search Classifieds </li>\n                        <li><a href="#"> Looking for Musicians </a></li>\n                        <li><a href="#"> Equipment and Services </a></li>\n                    </ul>\n                </li>\n                <li class="nav-username dropdown navbar-right">\n                    \n                    <a id="navt" href="#" class="dropdown-toggle" data-toggle="dropdown"> ' +
((__t = (userName)) == null ? '' : __t) +
'\n                        <i id="nav-caret" class="fa fa-chevron-down"></i>\n                    </a>\n                    <ul id="dd-menu" class="dropdown-menu" role="menu">\n                        <li><a> Messages </a></li>\n                        <li><a> Notifications </a></li>\n                        <li class="divider"></li>\n                        <li><a href="/auth/logout"> Logout </a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["track_content"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="track-content">\n\t<div class="song-user-image"></div>\n\t<div class="song-user-info-box">\n\t\t<div class="song-user-name"> ' +
((__t = (userName)) == null ? '' : __t) +
' </div>\n\t\t<div class="song-track-name"> ' +
((__t = (trackTitle)) == null ? '' : __t) +
' </div>\n\t\t<button class="like-track like btn btn-xs btn-primary" value="">\n\t\t\t<i class="fa fa-thumbs-o-up"></i>\n\t\t</button>\n\t\t<div class="likes"> ' +
((__t = (likes)) == null ? '' : __t) +
' Likes </div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["track"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="track-li">\n\t<div class="track-container">\n\t\t<h3> ' +
((__t = (instrument)) == null ? '' : __t) +
' </h3>\n\t\t<div class="container">\n\t\t\t<div class="row">\n\t\t\t\t<div class="track-controls col-xs-5 col-sm-4 col-md-3">\n\t\t\t\t\t<canvas id="canvas" class="visuals"></canvas>\n\t\t\t\t\t<select id="track-select" class="select-track btn btn-default"></select>\n\t\t\t\t\t<button id="upload-button" class="upload-button btn btn-default">\n\t\t\t\t\t\t<i class="fa fa-caret-square-o-up"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div id="upload-download" class="upload-download shadow">\n\t\t\t\t\t\t<button class="btn btn-default btn-xs btn-updown" data-toggle="modal" data-target="#uploadModal0"> Upload </button>\n\t\t\t\t\t\t<a href="">\n\t\t\t\t\t\t\t<button class="btn btn-default btn-xs btn-updown"> Download </button>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class="play-track btn btn-xs btn-success">\n\t\t\t\t\t\t<i class="fa fa-play-circle"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class="mute btn btn-xs btn-danger"> M\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div id="track-content" class="col-xs-7 col-sm-8 col-md-9"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</li>';

}
return __p
};