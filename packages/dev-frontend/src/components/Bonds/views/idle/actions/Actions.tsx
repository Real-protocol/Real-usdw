import React from "react";
import { Button } from "theme-ui";
import { useBondView } from "../../../context/BondViewContext";
import type { SelectBondPayload } from "../../../context/transitions";
import { CANCEL_BOND, CLAIM_BOND } from "../../../lexicon";

const CHICKEN_EMOJI_CURSOR = `url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'  style='font-size: 24px'><text y='20'>🐔</text></svg>"), auto`;
type ActionsProps = {
  bondId: string;
  disabled?: boolean;
};

export const Actions: React.FC<ActionsProps> = ({ bondId, disabled = false }) => {
  const { dispatchEvent } = useBondView();

  const handleCancelBondPressed = () => {
    dispatchEvent("CANCEL_BOND_PRESSED", { bondId } as SelectBondPayload);
  };

  const handleClaimBondPressed = () => {
    console.log("CLAIM", bondId);
    dispatchEvent("CLAIM_BOND_PRESSED", { bondId } as SelectBondPayload);
  };

  const cursor = disabled ? "auto" : CHICKEN_EMOJI_CURSOR;

  return (
    <>
      <Button
        disabled={disabled}
        variant="outline"
        sx={{ height: "44px" }}
        style={{
          cursor
        }}
        onClick={handleCancelBondPressed}
      >
        {CANCEL_BOND.term}
      </Button>
      <Button
        disabled={disabled}
        variant="outline"
        sx={{ height: "44px" }}
        style={{
          cursor
        }}
        onClick={handleClaimBondPressed}
      >
        {CLAIM_BOND.term}
      </Button>
    </>
  );
};
