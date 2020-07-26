import styled from 'styled-components';

export const CheckboxLabelStyled = styled.label`
    input {
        position: absolute;
        z-index: -1;
        opacity: 0;

        &:checked {
            + span::before {
                border-color: #2196F3;
                background-image: url("data:image/svg+xml;utf8,<svg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z' fill='%232196F3'/></svg>");
            }
        }
    }

    span {
        display: inline-flex;
        align-items: center;
        user-select: none;    
        &::before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #9ABBCE;
            border-radius: 2px;
            margin-right: 10px;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
`