<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

$app->get('/', function () use ($app) {
    return $app['twig']->render('frontend/index2.html', array());
})
->bind('homepage')
;

$app->get('/api/events', function (Request $r) use ($app){
    $query = "SELECT * FROM event";
    
    
    $events = $app['db']->fetchAll($query);
    
    return new Response(json_encode($events),200,array(
        'Content-Type' => 'application/json'
    ));
});

$app->get('/event', function (Request $r) use ($app){
    if(!$data = $r->get('event')){
        return new Response('Missing Parameters.',400);
    }
    
    
    
    return new Response(json_encode($events),200,array(
        'Content-Type' => 'application/json'
    ));
});



$app->error(function (\Exception $e, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    $page = 404 == $code ? '404.html' : '500.html';

    return new Response($app['twig']->render($page, array('code' => $code)), $code);
});
