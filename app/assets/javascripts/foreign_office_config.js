$(document).ready(function(){
  var pusher_key = $('meta[name="pusher_key"]').attr('content')
  var pusher_cluster = $('meta[name="pusher_cluster"]').attr('content')
  foreign_office.config({
    bus_name: 'PusherBus',
    key: pusher_key,
    forceTLS: true,
    cluster: pusher_cluster,
    authEndpoint: '/pusher_auth'
  });
  foreign_office.bind_listeners()
})
