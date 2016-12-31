<?php

$statuses = \NUSWhispers\Models\Confession::statuses();

$factory->define(
    \NUSWhispers\Models\Confession::class,
    function ($faker) use ($statuses) {
        return [
            'content' => $faker->text(),
            'images' => $faker->imageUrl(),
            'status' => $faker->randomElement($statuses),
            'views' => $faker->randomNumber(4),
            'fb_like_count' => $faker->randomNumber(3),
            'fb_comment_count' => $faker->randomNumber(2),
        ];
    }
);

foreach ($statuses as $status) {
    $factory->state(
        \NUSWhispers\Models\Confession::class,
        lcfirst($status),
        function ($faker) use ($status) {
            return [
                'status' => $status,
            ];
        }
    );
}
