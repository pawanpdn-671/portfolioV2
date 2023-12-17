"use client";
import React, { useRef, useState, useEffect } from "react";

const SwordFight = () => {
	const actionCanvasRef = useRef<any>(null);

	useEffect(() => {
		const canvas = actionCanvasRef.current;
		if (canvas) {
			const context = canvas.getContext("2d");
			canvas.width = 1024;
			canvas.height = 576;
			context.fillRect(0, 0, canvas.width, canvas.height);
		}
	}, []);

	return <canvas ref={actionCanvasRef}></canvas>;
};

export default SwordFight;
