# Contributor Card organism

This component shows the contributor's name, charge,image and their skills that comes from the API

## Props

1. skills
2. name
3. charge
4. image

## Types

| Props  |   type   |
| :----: | :------: |
| skills |  object  |
|  name  | _String_ |
| charge | _String_ |
| image  | _String_ |

### Example

```jsx
<ContributorCard
  skills={{ skill1: 'react', skill2: 'redux', skill3: 'nodejs' }}
  name="Joe Doe"
  charge="backend"
  image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
/>
```
