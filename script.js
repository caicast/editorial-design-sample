/* Setup Scrolling */
html,
body {
  margin: 0;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
}

/* Panel Defaults */
.panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  box-sizing: border-box;

  padding: 3em;
}

.one {
  background: #fff;
}

.two {
  background: url(https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExOTk0ODF8&ixlib=rb-4.0.3&q=80&w=400) no-repeat;
}

.three {
  background: #bdc3c7;
}

.four {
  background: #7b7d7d;
}

.five {
  background: #333;
}

.one h1 {
  transform: rotate(90deg);
  opacity: 0;
}

.three p {
  letter-spacing: 100px;
}

.six {
/*   transform: translateX(-500px) */
  translateX: -500px
}