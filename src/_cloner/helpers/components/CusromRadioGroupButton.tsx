import React, { useState } from "react";

const CusromRadioGroupButton = (props: {
    items: any
}) => {

    const [selected, setSelected] = useState<number>(1);
    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(Number(e.target.value));
    };

    return (
        <>
            {props.items.map((item: { id: number; title: string }) => {
                return (
                    <label className="ml-4" key={item.id}>
                        <input
                            className="mx-2 w-[14px] h-[14px]"
                            type="radio"
                            value={item.id}
                            name="factorType"
                            checked={selected === item.id}
                            onChange={handleRadio}
                        />
                        <span className="">{item.title}</span>
                    </label>
                );
            })}
        </>
    );
};

export default CusromRadioGroupButton;
