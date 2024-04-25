"use client";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem",
      }}
    >
      <div className={"lds-ripple"}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
