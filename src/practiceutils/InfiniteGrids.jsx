import React, { useState } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";

function getItems(nextGroupKey, count) {
    const nextItems = [];
    const nextKey = nextGroupKey * count;

    for (let i = 0; i < count; ++i) {
        nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
    }
    return nextItems;
}

const Item = ({ num }) => (
    <div className="item" style={{ width: "250px" }}>
        <div className="thumbnail">
            <img
                src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`}
                alt="egjs"
            />
        </div>
        <div className="info">{`Image ${num}`}</div>
    </div>
);

export default function App() {
    const [items, setItems] = useState(() => getItems(0, 10));

    return (
        <MasonryInfiniteGrid
            className="container"
            gap={5}
            onRequestAppend={(e) => {
                const nextGroupKey = (+e.groupKey || 0) + 1;

                setItems((prevItems) => [
                    ...prevItems,
                    ...getItems(nextGroupKey, 10),
                ]);
            }}
        >
            {items.map((item) => (
                <Item data-grid-groupkey={item.groupKey} key={item.key} num={item.key} />
            ))}
        </MasonryInfiniteGrid>
    );
}
