

### webriverio lib
I don't like how it looks
```js
let headerNavigateToRegisterButto = await (await $('.user_buttons')).$('button:nth-child(1)') 
```

I would like it to look like this
```js
this.headerNavigateToRegisterButton = this.root._$('.user_buttons button:nth-child(2)')._$('.header');
```


