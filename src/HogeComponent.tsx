import React from "react";

type Props = {
  className?: string;
  description: string;
};

const HogeComponent: React.FC<Props> = ({ description }: Props) => {
  return (
    <>
      <p>{description}</p>
    </>
  );
};

export default HogeComponent;
