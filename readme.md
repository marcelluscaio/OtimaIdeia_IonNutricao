# Ion Nutri

Website's home for an expert on nutrition.

## Access

<a href="https://nutriweb-caiocabral.vercel.app/">Acesse a aplicação clicando aqui</a>.

## Built with:

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)   ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


## Features

:gear: Animation on molecule
Header with animated underline on hover
Pentagon-shaped section 
Forms built with animated label as placeholder 
Responsive design
:fountain_pen: Tipografia fluida

## Some techniques used

### CSS-only navbar toggle
The menu is toggled using CSS only, through a checkbox linked to a label.

### Animated underline on menu
The only JavaScript used in the page was to create the Underline movement. The line addapts to each navigation item size and position as they are hovered.

### Pentagon shaped section
There are some different ways to build sections in shapes other than boxes. In this project, the challenge was doing so with a gradient background (making it harder to use the Skewed pseudo element technique) and allowing content to overflow the pentagon (which would be clipped by clip-path).

The solution was isolating the background as separate div, which is placed behind the section content.

### Cards alignment
The layout for the section "Nosso diferencial" had links that were not aligned. I chose to align these items to enhance UX. The technique to do that involved using CSS Variables.

I set the padding bottom of the card as the variable 'padding bottom'. As the card is the link's "Saber mais" parent, it can access that variable, so all position are the same.

```css
.advantages__card{
   position: relative;
   
   flex-grow: 1;
   width: 20%;
   --padding-bottom: 1em;
   padding-bottom: var(--padding-bottom);
   background-color: #FFFFFF;   
}

.advantages__card > a{   
   display: inline-block;

   position: absolute;
   bottom: var(--padding-bottom);

   color: var(--fontcolor-orange);
   font-size: var(--fontsize-2);   
   text-decoration: none;
}
```

### Label as placeholder
Placeholders can be a problem when it comes to accessibility. I chose not to use placeholders and use labels instead. And I wanted them to be inside o inputs, just like a placeholder would be. Absolute positioning achieves that:

Attention to the use of line height, the top value (same as input's top padding) and left value (same as input's left padding).
```css
.lead-capture__form__field > label{
   position: absolute;
   top: .25em;
   left: 1em;

   color: var(--fontcolor-orange);
   font-family: var(--font-opensans);
   font-size: var(--fontsize-2);
   line-height: 1.5;

   transition: top 1s ease-in-out, left 1s ease-in-out;
}
```
Now I wanted the label to move out of the input when user clicks on input (focus), and I didn't want it to go back when the input has text inside of it.

Here I am selecting the input's div that has an input that is focused, or that doesn't have the placeholder shown (I had to put a blank placeholder for it to work), and selecting the label from that div.

```css
.lead-capture__form__field:has(:is(input:focus, input:not(:placeholder-shown))) > label{
   top: calc(100% + .25em);
   left: 0;
}

```

### Gradient border
In the project I used two different techniques to set a linear-gradient on borders.

The first one uses border-image. This technique does not allow us to set a border-radius.

The other technique uses the background property, which can set background-clip. This way, we set a background for the padding, and another background that goes up to the border. In order for that background to be visibile we need a transparent border.

```css
.lead-capture__form > :is(button:focus,  button:hover){
   border-width: 1px;
   border-style: solid;
   border-image: var(--gradient-orange) 1;
}

.contact__form__field > :is(input, textarea){
   background: var(--gradient-lightblue) padding-box, var(--gradient-blue) border-box;
   border: 1px solid transparent;
}

```

## Goal

This project was built as a test for a position in a digital marketing agency.

## Screenshots
<p align="middle">
<img src="assets/img/mobile.png" width="50%" height="100%">
<img src="assets/img/desktop.png" width="100%" height="100%">
</p>