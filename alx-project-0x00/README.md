# alx-project-0x00-setup

# 1. Setting up project directories

Objective: Next.js framework provides a better folder structure for your application. Understanding the essence of these projects will help you better organize your assets and components.

added File: components/Card.tsx, components/Pill.tsx, interfaces/index.ts

# 2. Basic Routing

Objective: Next.js provides two types of routing [App Router and Pages Router]. You will realize from** Task 0**, we choose the option [No] for App Router. This is because we want to stick to a more simple routing in next.js, In future we will look more into App Router. This task will allow us to explore a simple routing in next.js. This requires no configuration whatsoever.

File: pages/landing.tsx, pages/about.tsx, interfaces/index.ts, README.md

# 3. Rendering Components

Objectives: Building a react application allows developers to identify patterns from their project mockups, design components that can be reusable across one or more pages or event components. This prevents code repetition and leverages on props to make such components dynamic.

The components directory we created from previous tasks can be used in this manner. (N:B The name can anything you or your team prefer, but it is advisable to use common standardized names)
This component can contain a bunch of files related to the components to be worked on or even grouped together under a unified name.
Components created in this directory can be used in almost every other file in your project. But it is important to use it right.

File: components/Card.tsx, components/Pill.tsx, README.md

# 4. Using components

Objective: Breaking your application down into components, does not only make you code modular and maintainable, but also speeds up development. Once a component is created it can be used in more than one place. The content of the component can be made dynamic, leverage on powerful features like props, interfaces, and types in typescript. For this task let’s make use of the Card and Pill components we created from the previous task.

# 5. Typing your functional components

Objective: Component design can take some getting used to. In your applications and similar other applications, it is important to identify which part of your application can be broken down into smaller components. And how that smaller component can be reused. To reuse a component effectively, we need to make it dynamic by passing some props to that container.
