import Link from 'next/link';
import React from 'react';
import {
  columnPadding,
  gray500,
  gray900,
  maxBreakpoint,
  primaryColor,
  secondaryColor,
  white,
} from '../styles';
import ActiveLink from './ActiveLink';
import Brand from './Brand';

export default () => (
  <header>
    <div className="container">
      <div className="left">
        <Brand />
      </div>
      <ul>
        <li className="icon">
          <a
            href="https://github.com/nusmodifications/nuswhispers"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 24C5.38266667 24 0 18.616 0 12S5.38266667 0 12 0c6.6173333 0 12 5.384 12 12s-5.3826667 12-12 12zm0-21.33333333c-5.14533333 0-9.33333333 4.18666666-9.33333333 9.33333333 0 5.1466667 4.188 9.3333333 9.33333333 9.3333333 5.1453333 0 9.3333333-4.1866666 9.3333333-9.3333333 0-5.14666667-4.188-9.33333333-9.3333333-9.33333333zm2.0866667 10.16800003c.228 0 .4213333.112.588.34C14.84 13.4 14.924 13.6786667 14.924 14.008c0 .3306667-.0826667.6093333-.2493333.8346667-.1666667.2253333-.3613334.3386666-.588.3386666-.2413334 0-.4493334-.112-.6146667-.3386666-.1653333-.2253334-.2493333-.504-.2493333-.8346667s.0826666-.608.2493333-.8333333c.1666667-.228.3746667-.34.6146667-.34zm2.9466666-3.05200003C17.676 10.4786667 18 11.3226667 18 12.3133333c0 .6426667-.076 1.22-.2213333 1.7346667-.148.512-.336.9306667-.56 1.252-.228.3226667-.504.6053333-.836.8466667-.332.2453333-.6373334.4213333-.9133334.5346666-.2773333.1133334-.5946666.2-.9546666.2613334-.3546667.0626666-.6226667.096-.808.1053333L13.12 17.06l-.4693333.0133333L12 17.088l-.6506667-.0146667L10.88 17.06l-.5866667-.012c-.1866666-.0093333-.45466663-.0426667-.80799997-.1053333-.36133333-.06-.67733333-.1466667-.95466666-.2613334-.276-.112-.58133334-.2893333-.912-.5346666C7.28533333 15.904 7.00933333 15.6213333 6.78133333 15.3c-.224-.3213333-.412-.74-.56-1.252C6.076 13.5333333 6 12.956 6 12.3133333c0-.9906666.32266667-1.8346666.96666667-2.53066663C6.896 9.748 6.892 9.40133333 6.956 8.74c.05733333-.66133333.19733333-1.27066667.42533333-1.82666667C8.184 6.99866667 9.172 7.452 10.3546667 8.26933333c.4-.104.9466666-.15733333 1.644-.15733333.732 0 1.2786666.05333333 1.6453333.15733333.5386667-.364 1.0546667-.66133333 1.5466667-.888.4986666-.224.8586666-.356 1.0853333-.39066666l.3386667-.07733334C16.844 7.46933333 16.984 8.08 17.0413333 8.74c.0666667.66133333.0626667 1.008-.008 1.04266667zM12.028 16.4853333c1.444 0 2.532-.172 3.272-.52.7373333-.3466666 1.1106667-1.0613333 1.1106667-2.14 0-.6253333-.2346667-1.148-.7053334-1.5653333-.2413333-.2266667-.5253333-.364-.8506666-.4173333-.3173334-.052-.8093334-.052-1.472 0-.66.0533333-1.112.0773333-1.3546667.0773333-.3306667 0-.6893333-.0173333-1.1346667-.052l-1.04399997-.0653333c-.25466666-.008-.52666666.024-.82133333.092-.29733333.0706666-.53866667.1906666-.73333333.364-.448.4-.676.9213333-.676 1.5653333 0 1.0786667.36533333 1.7933333 1.09466666 2.14.72933334.348 1.81466667.52 3.25866667.52l.056.0013333zM9.94 12.8346667c.2266667 0 .4213333.112.5866667.34.1653333.2253333.2493333.504.2493333.8333333 0 .3306667-.0826667.6093333-.2493333.8346667-.1653334.2253333-.3613334.3386666-.5866667.3386666-.24266667 0-.44933333-.112-.616-.3386666-.16533333-.2253334-.24933333-.504-.24933333-.8346667s.08266666-.608.24933333-.8333333c.16666667-.228.37333333-.34.616-.34z" />
            </svg>
          </a>
        </li>
        <li className="icon">
          <ActiveLink href="/search">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M14.1176471 5.64705882c2.3378823 0 4.2352941 1.89741177 4.2352941 4.23529412 0 2.33788236-1.8974118 4.23529416-4.2352941 4.23529416-2.3378824 0-4.23529416-1.8974118-4.23529416-4.23529416 0-2.33788235 1.89741176-4.23529412 4.23529416-4.23529412zm0-1.4117647c-3.114353 0-5.64705886 2.53270588-5.64705886 5.64705882 0 3.11435296 2.53270586 5.64705886 5.64705886 5.64705886 3.1143529 0 5.6470588-2.5327059 5.6470588-5.64705886 0-3.11435294-2.5327059-5.64705882-5.6470588-5.64705882zM.27529412 19.3044706c0 2.4381176 1.98211764 4.4202353 4.42023529 4.4202353 1.06729412 0 2.12188235-.3910588 2.97035294-1.1054118l3.38400005-3.3684706c.9670588.3204706 1.9934117.5138824 3.0677647.5138824C19.5670588 19.7647059 24 15.3303529 24 9.88235294 24 4.43435294 19.5670588 0 14.1176471 0 8.66964706 0 4.23529412 4.43435294 4.23529412 9.88235294c0 1.07435296.192 2.09788236.51388235 3.06776466l-3.16941176 3.2230589c-.84141177.8329411-1.3044706 1.9454117-1.3044706 3.1312941zm9.11858823-2.3915294l-3.54635294 3.5449412c-.31482353.264-.71152941.4418823-1.152.4418823-.88094117 0-1.59670588-.7143529-1.59670588-1.5967059 0-.4390588.17929412-.8385882.46870588-1.1251764l3.51811765-3.5731765c.61411765.9105882 1.39764706 1.6941176 2.30823529 2.3082353zm4.72376475.0282353c-3.8922353 0-7.05882357-3.1665883-7.05882357-7.05882356 0-3.89223529 3.16658827-7.05882353 7.05882357-7.05882353 3.8922353 0 7.0588235 3.16658824 7.0588235 7.05882353 0 3.89223526-3.1665882 7.05882356-7.0588235 7.05882356z" />
              </svg>
            </a>
          </ActiveLink>
        </li>
        <li>
          <Link href="/submit">
            <a className="write">
              <span>New Confession</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      header {
        background-color: ${white};
      }

      ul {
        align-items: center;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin-left: 1.5rem;
      }

      .container {
        align-items: center;
        box-sizing: border-box;
        padding: 1rem ${columnPadding};
        align-content: stretch;
      }

      .left {
        display: flex;
        flex: 1 1 0;
      }

      .icon :global(a) {
        box-sizing: border-box;
        display: block;
        fill: ${gray500};
        height: 24px;
        text-align: center;
        transition: fill 0.15s;
        width: 24px;
      }

      .icon :global(a:hover) {
        fill: ${primaryColor};
      }

      .icon :global(.active) {
        fill: ${gray900};
      }

      .write {
        align-items: center;
        background: ${primaryColor};
        border-radius: 1rem;
        color: #fff;
        display: flex;
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 1.5rem;
        padding: 0.25rem 0.85rem;
        text-align: center;
        transition: background 0.15s;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .write:hover {
        background: ${secondaryColor};
        text-decoration: none;
      }

      @media (max-width: ${maxBreakpoint}) {
        .container {
          padding: 0.5rem ${columnPadding};
        }

        .write {
          box-sizing: border-box;
          height: 32px;
          width: 32px;
          padding: 0;
        }

        .write:before {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath fill='%23fff' d='M10.5 4.5h-3v-3C7.5.672 6.828 0 6 0S4.5.672 4.5 1.5l.05325 3H1.5C.672 4.5 0 5.172 0 6s.672 1.5 1.5 1.5l3.05325-.05325L4.5 10.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5V7.44675l3 .05325c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5z'/%3E%3C/svg%3E")
            no-repeat;
          content: ' ';
          display: inline-block;
          height: 12px;
          margin: 0 auto;
          width: 12px;
        }

        .write span {
          display: none;
        }
      }
    `}</style>
  </header>
);
