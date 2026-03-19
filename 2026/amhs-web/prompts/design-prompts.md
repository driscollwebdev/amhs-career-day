# Layout prompt
Use the prompt below to generate an AMHS website layout for yourself. We used the [Claude Sonnet](https://www.anthropic.com/claude/sonnet) Large Language Model, but you can use ChatGPT or whatever other AI model you'd like. Just remember that not all AI models are good at everything!

Make a few changes to the prompt and see how the result changes. Once you get something you like you can update the `RootComponent()` function in the [__root.tsx](../src/routes/__root.tsx) file.

## The prompt:
```plaintext
I would like to create a new web page layout for Avon Middle High School. I have already started a typescript project using tanstack router and tailwindcss. 
The layout should be full-width and have a modern look and feel that resembles the MIT website (https://web.mit.edu/). The layout should have a navigation bar at the top
that includes an image of a panther's head on the left and a navigation menu in the center. The menu items are: Academics, Athletics, Guidance, Students, Parents, Schools.
The layout's primary color is orange, the foreground color is black, and the background color is white. The new page layout should be in a component named "RootComponent".

Here is some additional information about Avon Middle High School that may help you create the layout:
  - The school's colors are orange, black, and white.
  - The school mascot is the Panther.
  - The school's motto is "Panther PRIDE", where PRIDE is an acronym for Persistence, Respect, Integrity, Diversity, and Empowerment.
  - The school is located in Avon, Massachusetts, and serves students in grades 6-12 in Avon, as well as the surrounding communities of Brockton and Randolph.
  ```
# Homepage prompt
Once you have a layout that you're happy with, you can use this next prompt to generate the content for the homepage. You should copy the `Home()` function that is generated for you and replace the one in the [index.tsx](../src/routes/index.tsx) file.

## The prompt:
```plaintext
Now that the layout is looking good, I'd like to create a home page for the site. For now, I'd just like a component named "Home" with a hero banner that will contain the attached image.
```

# What next?
You can continue to prompt your model to generate more pages for the AMHS website. For instance, you can try something like this:

```plaintext
I'd like to create another page. This one will be for the Athletics department, and should contain the baseball schedule found here: https://www.avon.k12.ma.us/589/Athletics. The name of the component should be "Athletics" Please use function declaration syntax so that the component will work seamlessly with tanstack's file-based routing.
```
Or, you can create a project of your own instead using whatever prompts you'd like. Your only limit is your imagination!