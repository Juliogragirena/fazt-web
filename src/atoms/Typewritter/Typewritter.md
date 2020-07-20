/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */
# Typewritter atom
Writing effect
## Props
[texts](#1-texts)
#### 1. texts
Write in an array whatever you want to show with writing effect

**Example :**

```
const texts = ['text_with_effect']
<Typewritter texts={texts}/>
```
***

You also can put others strings in the array to switch strings, when the first string end start the other as a loop

**Example :**

```
const texts = ['text_with_effect', 'another_text_with_effect']
<Typewritter texts={texts}/>
```