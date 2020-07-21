# ProjectCards organism

This component is used to display the project informations that comes from the API

## Props

[id](#1-id),[projectName](#2-projectName), [imageUrl](#3-imageUrl),[favAmount](#4-fav-amount), [iconWidth](#5-width) [iconHeight](#6-height), [projectColor](#7-projectColor)

#### 1. id

Number identifier of the Project

#### 2. projectName

Name of the Project

#### 3. imageUrl

image of the project itself to be used as background on the project card

#### 4. favAmount

Amount of likes

#### 5. iconWidth

This prop receives the width desired of the icon

### 6. iconHeight

This props receibes the height desired of the icon

### 7. projectColor

this prop receives the background color depending on the project category

### Example of component:

```html
<ProjectCard
  iconWidth="16"
  iconHeight="16"
  imageUrl="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
  projectColor="orange"
/>
```
