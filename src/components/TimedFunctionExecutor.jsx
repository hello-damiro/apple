import React, { useState, useEffect } from 'react';

export default function TimedFunctionExecutor({ delayMs, targetFunction, infiniteLoop = false, isPaused = false }) {
  useEffect(() => {
    let intervalId = null;

    if (!isPaused) {
      intervalId = setInterval(() => {
        targetFunction();
      }, delayMs);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [delayMs, targetFunction, isPaused]);
}
