# DevStack - Development Stack Builder

DevStack is a simple and interactive React application where users can explore different web development technologies and build their own development stack.

Users can select technologies such as React, Node.js, MongoDB, TypeScript, Tailwind CSS, Docker, and more. Selected technologies are displayed in the "Your Stack" section.

---

## Live Demo

[https://assignment-05-b14.netlify.app/]

## GitHub Repository

[https://github.com/ishfaque-stack/my-assignment-05]

---

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify
- JSON
- Vite

---

## Features

### 1. Add Technologies to Stack

Users can add their favorite technologies to their stack by clicking the **Add to Stack** button.

### 2. Manage Selected Technologies

Users can remove individual technologies using the remove button or remove all selected technologies using the **Remove All** button.

### 3. Interactive Stack Management

The application shows the number of selected technologies, disables already selected technologies, limits the stack to a maximum of 5 technologies, and displays toast notifications for different actions.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

Ans: JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.
It makes React code easier to read and helps us describe what the UI should look like.

##2. What is the difference between props and state?

Ans: Props are used to pass data from a parent component to a child component.
State is data managed inside a component that can change over time.
In this project, skills are passed as props, while selectedSkills is managed using state.

##3. What does the useState hook do, and where did you use it in this project?

Ans: useState is a React Hook used to create and manage changing data inside a component.
I used useState in Skilldata.tsx to store the technologies selected by the user.
const [selectedSkills, setSelectedSkills] = useState<ISkill[]>([]);
When a user adds or removes a technology, the state is updated and the UI changes automatically.

##4 What does the useEffect hook do, and why did you need it to load the JSON data?

Ans: useEffect is used to perform side effects in React, such as fetching data or working with external systems.
However, I did not use useEffect in this project. I used fetch() with a Promise and React's use() Hook inside Suspense to load the JSON data.
const res = await fetch("/skill.json");
const data = await res.json();

##5. Why does every item in a .map() list need a unique key prop?

Ans: React uses the key prop to identify each item in a list.
It helps React understand which items have changed, been added, or removed.
In this project, I used the skill name as the unique key:

{skills.map((skill) => (
  <SkillCard
    key={skill.name}
    skill={skill}
  />
))}

##6. What is conditional rendering? Show one place you used it.

Ans: Conditional rendering means displaying different UI elements based on a condition.
I used conditional rendering in the Your Stack section.
If there are no selected technologies, the application shows an empty stack message. Otherwise, it displays the selected technologies.
{selectedSkills.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  selectedSkills.map((skill) => (
    // Show selected skill
  ))
)}

##7. How do you pass data from a parent component to a child component, and how can the child send data back?

Ans: Data is passed from a parent component to a child component using props.
For example, I passed skills from Skilldata to Allskills:
<Allskills
  skills={skills}
/>
A child component can send data back to the parent by using a function passed through props.
In this project, setSelectedSkills is passed to Allskills, which allows the child component to update the selected technologies.

<Allskills
  skills={skills}
  selectedSkills={selectedSkills}
  setSelectedSkills={setSelectedSkills}
/>


