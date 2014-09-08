// Sandstorm - Personal Cloud Sandbox
// Copyright (c) 2014 Sandstorm Development Group, Inc. and contributors
// All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

exports.command = function(callback) {
  var ret = this
    .init()
    .execute('window.Meteor.logout()')
    .pause(50)
    .execute('window.mockLoginGithub()')
    .pause(50)
    .init()
    .waitForElementVisible('#applist-apps', 5000);

  this.sandstormAccount = 'github';
  if (typeof callback === "function") {
    return ret.click("#applist-apps > ul > li:nth-child(1)", callback);
  } else {
    return ret.click("#applist-apps > ul > li:nth-child(1)");
  }
};
