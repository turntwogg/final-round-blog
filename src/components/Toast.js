import React, { createContext, useContext, useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';
import { useTransition, animated } from 'react-spring';
import uuid from 'uuid/v4';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const createToast = (toast, config) => {
    toast.id = uuid();
    if (config) toast.config = config;
    setToasts(currToasts => [...currToasts, toast]);
  };
  const removeToast = toast => {
    setToasts(currToasts => currToasts.filter(t => t.id !== toast.id));
  };
  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const StyledToastContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
`;

export const ToastContainer = () => {
  const { toasts } = useToast();
  const transitions = useTransition(toasts, toast => toast.id, {
    from: { opacity: 0, transform: 'translate3d(3000px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(3000px, 0, 0)' },
  });
  return (
    <StyledToastContainer>
      {transitions.map(({ item, props, key }) => (
        <Toast toast={item} key={key} style={props} />
      ))}
    </StyledToastContainer>
  );
};

const StyledToast = styled(animated.div)`
  position: relative;
  width: 250px;
  padding: 24px;
  line-height: 1.2;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ToastClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const CLOSE_DURATION = 5000;

const slideBackground = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;

const ToastBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-image: linear-gradient(
    to right,
    ${({ color }) => color},
    ${({ color }) => lighten(0.15, color)}
  );
  animation-duration: ${({ duration }) => duration}ms;
  animation-name: ${slideBackground};
  transform: scaleX(0);
  transform-origin: left;
`;

const Toast = ({ toast, style }) => {
  const { removeToast } = useToast();
  const barColor = toast.result === 'success' ? '#43a047' : '#f44336';
  const duration = toast.config?.duration || CLOSE_DURATION;
  const autoClose = toast.config?.autoClose || true;

  useEffect(() => {
    if (!autoClose) return;
    setTimeout(() => {
      removeToast(toast);
    }, duration);
  }, [autoClose]);

  return (
    <StyledToast style={style}>
      <ToastBar color={barColor} duration={duration} />
      <div className="toast-msg">{toast.msg}</div>
      <ToastClose onClick={() => removeToast(toast)}>
        <MdClose />
      </ToastClose>
    </StyledToast>
  );
};
