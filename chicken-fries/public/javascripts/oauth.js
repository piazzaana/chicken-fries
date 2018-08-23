console.log("oauth.js loaded");

//based on (github address here)
let ROOTURL = 'http://localhost:8888/wordpress';
const RESTROOT = ROOTURL + 'wp-json';
const RESTROUTE = RESTROOT + '/wp/v2/orders/';

let jso = new JSO({
    providerID: 'Chicken & Fries',
    client_id: 'yvFEIQtkZvqihxnSPYXV9dYXyuWysVurqhA7NUsd',
    redirect_uri: 'http://localhost:3000/',
    authorization: ROOTURL + '/oauth/authorize',
});

//catch response after login
jso.callback();

let token = localStorage.getItem('tokens-Chickenfries');

//trigger oauth authentication sequence
function oauthLogin(){
    jso.getToken();
}

//logout and wipe all the memory from the session
function oauthLogout(){
    jso.wipeToken();
}

//Monitor the login button
$('#login').click(function () {
    oauthLogin();
});

//Monitor the logout button
$('#logout').click(function () {
    oauthLogout();
});