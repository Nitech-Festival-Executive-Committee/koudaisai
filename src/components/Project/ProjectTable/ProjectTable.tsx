import React from "react";
import styles from "./ProjectTable.module.scss";

interface ProjectTableProps {
  tableObject: { column: string[]; data: string[][] };
}

export default function ProjectTable({ tableObject }: ProjectTableProps) {
  return (
    <>
      <table className={styles.projectTable}>
        <thead>
          <tr>
            {tableObject.column.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableObject.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* 最初の列は th */}
              <th>{row[0]}</th>
              {/* データの残り部分を表示 */}
              {row.length < tableObject.column.length ? (
                // データ数が不足している場合、残りの列数分colSpanを適用
                <td colSpan={tableObject.column.length - 1}>{row[1]}</td>
              ) : (
                row
                  .slice(1)
                  .map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
