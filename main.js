function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.buttonClicked();
    },

    buttonClicked() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.addToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-eql")) {
          let conta = this.display.value;

          try {
            conta = eval(conta);

            if (!conta) {
              alert("Conta inválida");
              return;
            }

            this.display.value = conta;
          } catch (e) {
            if (!conta) {
              alert("Conta inválida");
              return;
            }
          }
        }

        if (el.classList.contains("btn-clear")) {
          this.display.value = "";
        }

        if (el.classList.contains("btn-del")) {
          this.display.value = this.display.value.slice(0, -1);
        }

        this.display.addEventListener("keyup", (e) => {
          if (e.keyCode === 13) {
            let conta = this.display.value;

            try {
              conta = eval(conta);

              if (!conta) {
                alert("Conta inválida");
                return;
              }

              this.display.value = conta;
            } catch (e) {
              if (!conta) {
                alert("Conta inválida");
                return;
              }
            }
          }
        });

        this.display.addEventListener("keypress", (e) => {
         if (e.key === ",") {
            e.preventDefault();
            this.display.value += "."
         }
        })
      });
    },

    addToDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
