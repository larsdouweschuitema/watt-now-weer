![WattNowWeer Logo](readme_img/wattnouweer.png)

# Watt Now Weer

Watt Now Weer is a full-fledged planning and monitoring tool for power-management of (large-scale) festivals. The application provides organizers with a means to plan the ideal festival layouts with ease. Create a map that suits the needs of your festival, get rich information on the expected power usage and usage peaks and monitor the usage in real-time while the festival is in full effect. Watt Now Weer makes planning and maintaining power setups of festivals a breeze!

## Features
* [x] Map overview including scale, zoom and drag'n drop functionalities
* [x] Planning tool to place and configure objects (e.g. radius, electricity usage, costs)
* [x] Console containing rich information about the current setup
* [x] Generate expectation reports based on the created planning
* [x] Real-time usage charts during the festival
* [x] Websockets allowing you to collaborate real-time

## Use case
An organisator of a festival wants to lower the costs of the electricity, and he wants to be sure all generators are used in the most effective way. For this festival he and his team will be using the _Watt Now Weer_ dashboard to plan and monitor the eletricity planning. They create a map determing the longtitude/latitude and zoom in on the location of the festival. Then they determine the scale of the map, followed by placing a few objects. They immediately get feedback from the console that certain objects are unpowered, because there is no generator in range. They place a generator. Soon after they get feedback from the console to reallocate objects to make sure the generator is used for 75% of its usage (this is the most effective number for a generator to be fully productive). Shortly after finishing the map they generate a report on the "Prognose" tab. This allows them to see what is good and what needs to be improved, e.g. the usage of generators, or maybe some important objects for the festival are missing, like toilets.

During the building of the festival and during the actual festival they can use their iPads to use the dashboard, and check out real-time statistics. This allows them to analyse and future improve their festivals to have the most efficient and cost-effective setup.

## Wish list
- [ ] Create and manage multiple festival setups
- [ ] Create and manage teams to collaborate on different festival projects
- [ ] Real-time chat allowing users to communicate in the dashboard
- [ ] Manage charts layouts to your own wishes

## Design proposal
![Console](readme_img/console.png)

![Unpowered](readme_img/unpowered.png)

![Map](readme_img/map.png)

![DragnDrop](readme_img/dragndrop.png)

![Prognose](readme_img/prognose.png)

## Installation
```bash
$ git clone https://github.com/larsdouweschuitema/watt-now-weer.git
```

The interactive demo is a static website. You'll need a simple webserver like [`http-server`](npmjs.org/packages/http-server) to serve the files.

## Team
![Rijk van Zanten](https://avatars0.githubusercontent.com/u/9141017?v=3&s=460) | ![Lars Schuitema](https://avatars1.githubusercontent.com/u/8817968?v=3&s=460)
---|---
[Rijk van Zanten](https://github.com/rijkvanzanten) | [Lars Schuitema](https://github.com/larsdouweschuitema)

## Licenses
MIT © Lars Douwe Schuitema
