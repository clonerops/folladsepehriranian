const CusromRadioGroupButton = (props: {
    items: any
    name: string
    selected: number | undefined
    handleRadio: any
    className?: string
}) => {
    return (
        <>
            {props.items?.map((item: { id: number, desc: string, validityDesc: string, description: string, typeDesc: string, title: string }) => {
                return (
                    <div key={item.id} className={props.className}>
                        <label className="tw-ml-4" key={item.id}>
                            <input
                                className="tw-mx-2 tw-w-[14px] tw-h-[14px] tw-accent-green-700"
                                type="radio"
                                value={item.id}
                                name={props.name}
                                checked={props.selected === item.id}
                                onChange={props.handleRadio}
                            />
                            {item.desc &&
                                <span className="">{item.desc}</span>
                            }
                            {item.description &&
                                <span className="">{item.description}</span>
                            }
                            {item.typeDesc &&
                                <span className="">{item.typeDesc}</span>
                            }
                            {item.title &&
                                <span className="">{item.title}</span>
                            }
                            {item.validityDesc &&
                                <span className="">{item.validityDesc}</span>
                            }
                        </label>
                    </div>
                );
            })}
        </>
    );
};

export default CusromRadioGroupButton;
