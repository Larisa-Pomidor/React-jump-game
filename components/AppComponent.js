const Game = () => {
  const [jump, setJump] = React.useState(0);

  const handleJump = () => {
    if (!jump) {
      setJump(1);
      setTimeout(() => setJump(0), 300)
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", function (event) {
      handleJump()
    })

    setInterval(() => {
      let catTop = parseInt(window.getComputedStyle(document.querySelector(".cat")).getPropertyValue("top"));
      let donutRight = parseInt(window.getComputedStyle(document.querySelector(".donut")).getPropertyValue("right"));

      if (donutRight > 400 && donutRight < 440 && catTop > -120) {
        alert("Game over")
      }
    }, 10)
  });

  return (
    <div className="game">
      <div className="game__inner">
        <div className="donut"></div>
        <div className={"cat " + (!jump ? '' : 'cat_jump')}></div>
      </div>
    </div>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
