import React, { useState } from "react";

const CusromRadioGroupButton = (props: {
    items: any
    name: string
    selected: number | undefined
    handleRadio: any
    className?: string
}) => {

    // const [selected, setSelected] = useState<number>(1);
    // const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelected(Number(e.target.value));
    // };

    return (
        <>
            {props.items.map((item: { id: number; title: string }) => {
                return (
                    <div className={props.className}>
                        <label className="tw-ml-4" key={item.id}>
                            <input
                                className="tw-mx-2 tw-w-[14px] tw-h-[14px] tw-accent-green-700"
                                type="radio"
                                value={item.id}
                                name={props.name}
                                checked={props.selected === item.id}
                                onChange={props.handleRadio}
                            />
                            <span className="">{item.title}</span>
                        </label>
                    </div>
                );
            })}
        </>
    );
};

export default CusromRadioGroupButton;
