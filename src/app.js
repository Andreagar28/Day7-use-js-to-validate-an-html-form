const NAME = document.querySelector("#inputfirstname");
const LASTNAME = document.querySelector("#inputlastname");
const CITY = document.querySelector("#inputcity");
const STATE = document.querySelector("#inputstate");
const CARD = document.querySelector("#inputcard");
const CVC = document.querySelector("#inputcvc");
const AMOUNT = document.querySelector("#inputamount");
const POSTALCODE = document.querySelector("#inputpostalcode");

window.onload = function() {
  const CARD = document.querySelector("#inputcard");
  CARD.addEventListener("input", event => {
    let empty = CHECKCARD();
  });

  const CVC = document.querySelector("#inputcvc");
  CVC.addEventListener("input", event => {
    let empty = CHECKCVC();
  });

  const AMOUNT = document.querySelector("#inputamount");
  AMOUNT.addEventListener("input", event => {
    let empty = CHECKAMOUNT();
  });

  const NAME = document.querySelector("#inputfirstname");
  NAME.addEventListener("input", event => {
    let empty = CHECKNAME();
  });

  const LASTNAME = document.querySelector("#inputlastname");
  LASTNAME.addEventListener("input", event => {
    let empty = CHECKLASTNAME();
  });

  const CITY = document.querySelector("#inputcity");
  CITY.addEventListener("input", event => {
    let empty = CHECKCITY();
  });

  const STATE = document.querySelector("#inputstate");
  STATE.addEventListener("input", event => {
    let empty = CHECKSTATE();
  });

  const POSTALCODE = document.querySelector("#inputpostalcode");
  POSTALCODE.addEventListener("input", event => {
    let empty = CHECKPOSTALCODE();
  });

  const MESSAGE = document.querySelector("#message");
  MESSAGE.addEventListener("input", event => {
    let empty = CHECKMESSAGE();
  });

  isValidNumber(CARD);
  isValidNumber(CVC);
  isValidNumber(AMOUNT);
  isValidNumber(POSTALCODE);
  isValidName(NAME);
  isValidName(LASTNAME);
  isValidName(CITY);
  isValidName(STATE);

  const SEND = document.querySelector("#button-send");
  SEND.addEventListener("submit", event => {
    SEND.preventDefault();
  });
};

const CHECKCARD = () => {
  const CARD = document.querySelector("#inputcard");
  CARD.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const CHECKCVC = () => {
  const CVC = document.querySelector("#inputcvc");
  CVC.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const CHECKAMOUNT = () => {
  const CHECKAMOUNT = document.querySelector("#inputamount");
  CHECKAMOUNT.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const CHECKNAME = () => {
  const CHECKNAME = document.querySelector("#inputfirstname");
  CHECKNAME.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const CHECKLASTNAME = () => {
  const CHECKLASTNAME = document.querySelector("#inputlastname");
  CHECKLASTNAME.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const CHECKCITY = () => {
  const CHECKCITY = document.querySelector("#inputcity");
  CHECKCITY.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const CHECKSTATE = () => {
  const CHECKSTATE = document.querySelector("#inputstate");
  CHECKSTATE.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const CHECKPOSTALCODE = () => {
  const CHECKPOSTALCODE = document.querySelector("#inputpostalcode");
  CHECKPOSTALCODE.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const CHECKMESSAGE = () => {
  const CHECKMESSAGE = document.querySelector("#message");
  CHECKMESSAGE.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("border-primary");
    }
    if (!event.target.value) {
      event.target.classList.add("border-danger");
    }
  });
};

const isValidName = cadena => {
  cadena.addEventListener("focusout", event => {
    checkOnlyString(cadena.value)
      ? validInputStyle(cadena)
      : invalidInputStyle(cadena);
  });
};

const isValidNumber = cadena => {
  cadena.addEventListener("focusout", event => {
    checkOnlyNumber(cadena.value)
      ? validInputStyle(cadena)
      : invalidInputStyle(cadena);
  });
};

const invalidInputStyle = input => {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};
const validInputStyle = input => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};
const checkOnlyString = text => {
  return /^[a-zA-Z]+$/.test(text);
};

const checkOnlyNumber = text => {
  return /^[0-9]+$/.test(text);
};
