CCSE-fork
=========

Experimental fork of Klattmose's
[Cookie Clicker Script Extender](https://klattmose.github.io/CookieClicker/CCSE-POCs/).

This repository was created from [Klattmose's repository](https://github.com/klattmose/klattmose.github.io/)
by `git filter-branch`ing out everything that's not relevant to `CCSE.js`,
which should explain the potientially weird commit messages.


Features
========

- "Drop-in replacement": This fork of CCSE hides the fact it is a fork from other mods,
so by loading it before any other mods should prevent the official CCSE from being loaded.
It even uses the same `localStorage` slot!

- Rudimentary unit testing, in `test.js`.


Changelog
=========

2.experimental.1
----------------

Bug fix:
Functions in `Game.customAscend` and `Game.customReincarnate`
were being called even if `bypass != 1`.

2.experimental.1.1
------------------

Official version it is compatible with bumped to CCSE v2.018.

2.experimental.2
----------------

Incorporated changes to CCSE v2.020.
This made this fork largely irrelevant.

I'm keeping it
just to have a repository for CCSE which is independent from the other stuff in klattmose.github.io.
