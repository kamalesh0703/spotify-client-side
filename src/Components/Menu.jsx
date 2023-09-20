import React, { useEffect } from "react";

function Menu({ title, MenuObject }) {
  useEffect(() => {
    const allli = document
      .querySelector(".MenuContainer ul")
      .querySelectorAll("li");
    function changeMenuActive() {
      allli.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allli.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);
  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul>
        {MenuObject &&
          MenuObject.map((menu) => (
            <li>
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
