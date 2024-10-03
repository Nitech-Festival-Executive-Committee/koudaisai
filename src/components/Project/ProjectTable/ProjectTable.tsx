import React from "react";
import styles from "./ProjectTable.module.scss";

interface ProjectTableProps {
  tableObject: { column: string[]; data: string[][]; widthWeight: number[] };
}

export default function ProjectTable({ tableObject }: ProjectTableProps) {
  // 各列の幅の合計を計算
  const totalWeight = tableObject.widthWeight.reduce(
    (sum, weight) => sum + weight,
    0
  );

  return (
    <>
      <table className={styles.projectTable}>
        <thead>
          <tr>
            {tableObject.column.map((header, index) => (
              <th
                key={index}
                style={{
                  width: `${(tableObject.widthWeight[index] / totalWeight) * 100}%`,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableObject.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* 最初の列は th */}
              <th
                style={{
                  width: `${(tableObject.widthWeight[0] / totalWeight) * 100}%`,
                }}
              >
                {row[0]}
              </th>
              {/* 残りの列を表示 */}
              {row.length < tableObject.column.length ? (
                // データ数が不足している場合、残りの列数分colSpanを適用
                <td
                  colSpan={tableObject.column.length - 1}
                  style={{
                    width: `${(tableObject.widthWeight.slice(1).reduce((a, b) => a + b, 0) / totalWeight) * 100}%`,
                  }}
                >
                  {row[1]}
                </td>
              ) : (
                row.slice(1).map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={{
                      width: `${(tableObject.widthWeight[cellIndex + 1] / totalWeight) * 100}%`,
                    }}
                  >
                    {cell}
                  </td>
                ))
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
