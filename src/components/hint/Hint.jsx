import React from "react";
import { connect } from "react-redux";
import { hideHint } from "../../store/modules/control";
import { 
  HintWrapper, 
  HintModal, 
  HintTitle, 
  HintContent,
  HintEquation,
  HintText,
  CloseButton 
} from "./HintStyle";

const Hint = ({ showHint, hint, hideHint }) => {
  if (!showHint || !hint) {
    return null;
  }
  
  return (
    <HintWrapper>
      <HintModal>
        <HintTitle>💡 Dica Inicial</HintTitle>
        <HintContent>
          <HintText>
            Resolva as equações abaixo para encontrar uma coordenada segura:
          </HintText>
          <HintEquation>{hint.rowEquation}</HintEquation>
          <HintEquation>{hint.columnEquation}</HintEquation>
          <HintText>
            Clique na célula correspondente à linha e coluna encontradas!
          </HintText>
        </HintContent>
        <CloseButton onClick={hideHint}>
          Entendi!
        </CloseButton>
      </HintModal>
    </HintWrapper>
  );
};

const mapStateToProps = (state) => ({
  showHint: state.control.showHint,
  hint: state.control.hint,
});

const mapDispatchToProps = {
  hideHint,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hint);