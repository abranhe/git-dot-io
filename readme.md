<div align="center">
  <img src="https://cdn.abranhe.com/projects/gitdotio/logo.svg">
  <br>
  <br>
  <br>
  <p><i>Redirect to your websites using <b>git.io</b></i></p>
</div>

## Why?

[**Git.io**](https://git.io) is a URL shortening service that will redirect to your **Github** projects. If you try to redirect to other domain out of `Github.com` (*like your website*) you won't be able to do it.

So [this project](https://github.com/gitdotio/gitdotio.github.io) will help you redirect to any website using **git.io** super easy!

## How to do it?

- Check if [git.io/YOUR-BEAUTIFUL-LINK](https://git.io/your-beautiful-link) is avilable.

![not-found](https://cdn.abranhe.com/projects/gitdotio/screenshot.png)

-  Go to **[_redirects](_redirects)**.
-  Create an **.html** file  with the name of the link you want to make.

- Inside the file you need to copy the code below and paste it on you file, change it with you content.

``` html
---
permalink: /your-beautiful-link   <!-- The link where you want to redirect -->
destination: http://your-beautiful-site.com
---
```

### So is that all?

> No!

Now you can go to [**Git.io**](https://git.io) and copy `gitdotio.github.io/your-beautiful-link` and paste your link there and when you are done,  you will have a `git.io/random-name` that will be redirected to `your-beautiful-site.com`.

**Cons**:

The [**Git.io**](https://git.io) website will only offer random short URLs.

## So what if I want a `mycool-name`?

Well to have your custom vanity URL with **git.io** you will need to use your command line.

```console
$ curl -i https://git.io -F "url=https://gitdotio.github.io/your-beautiful-link" -F "code=mycool-name"
```

where you will need to set the `url=` parameter with the link created by **gitdotio.github.io** and `code=` with the value you'd like to set.

At this point when you type `git.io/mycool-name` that will be redirected to `your-beautiful-site.com`


## Note ⚠️

Websites won't be checked, but keep in mind to don't redirect to any abusive, racist or sexist website.

To use this service since it's owned by **Github, Inc** you will need to agree with the following:

- [x] Github's [Term and conditions](https://github.com/site/terms)
- [x] Github's [Privacy](https://github.com/site/privacy)
- [x] Github's [Security Terms](https://github.com/security)

## Who to follow?

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50)](https://github.com/abranhe)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |


# Contributors

|      | Name                   | Github                                                       |
| :--: | :---------------------:| :----------------------------------------------------------: |
|   1  | Carlos Abraham         | [@abranhe](https://github.com/abranhe)                       |
|   2  | Jobayer Ahmed Mickey   | [@mickeyvai](https://github.com/Jobayer-Ahmed)               |
|   3  | Kevin Adam             | [@vnxx](https://github.com/vnxx)                             |
|   4  | Carlos                 | [@carlittoo7](https://github.com/carlittoo7)                 |
|   5  | Denis Oliveira         | [@denisolvr](https://github.com/denisolvr)                   |
|   6  | Andrea Sonny           | [@andreasonny83](https://github.com/andreasonny83)           |
|   7  | Lalit Kushwah          | [@lalitkushwah](https://github.com/LalitKushwah)             |
|   8  | Eric Mshen             | [@ericmshen](https://github.com/ericmshen)                   |
|   9  | Hassangamal            | [@hassangamal](https://github.com/hassangamal)               |
|  10  | Sean Kim               | [@sungk44](https://github.com/sungk44)                       |
|  11  | Jyotsna Gupta          | [@jyotsna17gupta](https://github.com/jyotsna17gupta)         |
|  12  | MysticSeagull          | [@justinborzi](https://github.com/justinborzi)               |
|  13  | Mary Chew              | [@marychew97](https://github.com/marychew97)                 |
|  14  | Wendy Segura           | [@wendysegura](https://github.com/wendysegura)               |
|  15  | Rameez Ahmad           | [@psycho-valker](https://github.com/psycho-valker)           |
|  15  | Amiya                  | [@amiya-1998](https://github.com/amiya-1998)                 |
|  16  | Jefferson Neves        | [@jeffersonrpn](https://github.com/jeffersonrpn)             |
|  17  | Jefferson Neves        | [@jeffersonrpn](https://github.com/jeffersonrpn)             |
|  18  | Stephanie Velazquez    | [@svelazquez](https://github.com/svelazquez)                 |
|  19  | Sooryanarayanan B      | [@mesooryanarayananb](https://github.com/mesooryanarayananb) |
|  20  | Phenonamal             | [@phenonamal](https://github.com/phenonamal)                 |
|  21  | Samuel Requena         | [@svelazquez](https://github.com/sami286)                    |
|  22  | Ozlop                  | [@ozlop](https://github.com/ozlop)                           |
|  23  | Gasta                  | [@gcoria](https://github.com/gcoria)                         |
|  24  | Anantha Vijay          | [@ananthavijay](https://github.com/ananthavijay)             |
|  25  | Ravi Gupta             | [@guptaravi540](https://github.com/@guptaravi540)            |
|  26  | Jacob Proffer          | [@jacobproffer](https://github.com/jacobproffer)             |
|  27  | Braunson               | [@braunson](https://github.com/braunson)                     |
|  28  | Izamglima              | [@izamglima](https://github.com/izamglima)                   |
|  29  | MsWebGirl              | [@mswebgirl](https://github.com/mswebgirl)                   |
|  30  | Ken Kelly              | [@kenhkelly](https://github.com/kenhkelly)                   |
|  31  | Pankaj                 | [@erpankaj182](https://github.com/erpankaj182)               |
|  32  | Dr-Wolf-ML             | [@Dr-Wolf-ML](https://github.com/Dr-Wolf-ML)                 |
|  33  | Alin Migea             | [@alinmigea](https://github.com/alinmigea)                   |
|  34  | swaager                | [@swaager](https://github.com/swaager)                       |
|  35  | Gabriel                | [@gabrielcaballero](https://github.com/gabrielcaballero)     |
|  36  | NickJansenCode         | [@NickJansenCode](https://github.com/NickJansenCode)         |
|  37  | Peter Cruckshank       | [@PeterCr](https://github.com/PeterCr)                       |
|  38  | Kimberly Wong          | [@kjowong](https://github.com/kjowong)                       |
|  39  | Eduard                 | [@TigerAsH94](https://github.com/TigerAsH94)                 |
|  40  | Steven S.              | [@sunpech](https://github.com/sunpech)                       |
|  41  | Muhamad Nur Hafidz     | [@muhamadhafidz](https://github.com/muhamadhafidz)           |
## License

[The UNLICENSE](https://github.com/gitdotio/gitdotio.github.com/blob/master/license)


<div align="center">
  <img src="https://cdn.abranhe.com/projects/gitdotio/logo.svg" width="35px">
</div>
