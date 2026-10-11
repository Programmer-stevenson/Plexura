import React from 'react';

function PartnerSet({ hidden = false }) {
  return (
    <div className="tp-set" aria-hidden={hidden || undefined}>
      <span className="tp-stripe">stripe</span>

      <span className="tp-webflow">webflow</span>

      <span className="tp-wordpress">
        <i className="tp-wp-mark" aria-hidden="true">W</i>
        WordPress
      </span>

      <span className="tp-shopify">
        <i className="tp-shop-bag" aria-hidden="true" />
        shopify
      </span>

      <span className="tp-vercel">
        <i className="tp-vercel-triangle" aria-hidden="true" />
        VERCEL
      </span>

      <span className="tp-gcloud">
        <i className="tp-cloud-icon" aria-hidden="true" />
        Google Cloud
      </span>

      <span className="tp-solution">Cloud Solutions</span>
      <span className="tp-solution">AI Solutions</span>
    </div>
  );
}

export default function TechnologyPartners() {
  return (
    <section
      className="plexura-tech-ribbon"
      aria-label="Technology stack and solutions"
    >
      <style>{`
        .plexura-tech-ribbon {
          position: relative;
          width: 100%;
          min-width: 0;
          color: #fff;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .plexura-tech-ribbon,
        .plexura-tech-ribbon * {
          box-sizing: border-box;
        }

        .plexura-tech-ribbon .tp-title {
          margin: 0 0 26px;
          color: rgba(247, 250, 255, .88);
          text-transform: uppercase;
          letter-spacing: 6px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
        }

        .plexura-tech-ribbon .tp-row {
          position: relative;
          width: 830px;
          max-width: 100%;
          overflow: hidden;
          color: #fff;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0,
            #000 5%,
            #000 95%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0,
            #000 5%,
            #000 95%,
            transparent 100%
          );
        }

        .plexura-tech-ribbon .tp-track {
          display: flex;
          width: max-content;
          padding-block: 12px;
          animation: plexura-partners-scroll 18s linear infinite;
          will-change: transform;
        }

        .plexura-tech-ribbon .tp-set {
          display: flex;
          align-items: center;
          gap: 58px;
          flex-shrink: 0;
          padding-right: 58px;
        }

        .plexura-tech-ribbon .tp-set > span {
          flex-shrink: 0;
          white-space: nowrap;
          line-height: 1.2;
        }

        .plexura-tech-ribbon .tp-set i {
          flex-shrink: 0;
        }

        .plexura-tech-ribbon .tp-row:hover .tp-track {
          animation-play-state: paused;
        }

        @keyframes plexura-partners-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .plexura-tech-ribbon .tp-stripe {
          font-size: 29px;
          font-weight: 800;
          letter-spacing: -1.7px;
        }

        .plexura-tech-ribbon .tp-webflow {
          font-size: 26px;
          font-weight: 800;
          font-style: italic;
          letter-spacing: -1.7px;
        }

        .plexura-tech-ribbon .tp-wordpress {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 23px;
          font-weight: 650;
          letter-spacing: -.8px;
        }

        .plexura-tech-ribbon .tp-wp-mark {
          width: 30px;
          height: 30px;
          border: 2px solid #fff;
          border-radius: 50%;
          display: inline-grid;
          place-items: center;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          font-style: normal;
          font-weight: 700;
          line-height: 1;
        }

        .plexura-tech-ribbon .tp-shopify {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 27px;
          font-weight: 800;
          font-style: italic;
          letter-spacing: -1.5px;
        }

        .plexura-tech-ribbon .tp-shop-bag {
          width: 27px;
          height: 31px;
          border: 3px solid #fff;
          border-radius: 5px 5px 4px 4px;
          position: relative;
          transform: skew(-4deg);
        }

        .plexura-tech-ribbon .tp-shop-bag::before {
          content: '';
          position: absolute;
          width: 12px;
          height: 9px;
          left: 4px;
          top: -9px;
          border: 3px solid #fff;
          border-bottom: 0;
          border-radius: 10px 10px 0 0;
        }

        .plexura-tech-ribbon .tp-shop-bag::after {
          content: 'S';
          position: absolute;
          inset: 1px 0 0;
          display: grid;
          place-items: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 900;
        }

        .plexura-tech-ribbon .tp-vercel {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          font-size: 22px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 650;
        }

        .plexura-tech-ribbon .tp-vercel-triangle {
          width: 0;
          height: 0;
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-bottom: 31px solid #fff;
        }

        .plexura-tech-ribbon .tp-gcloud {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 500;
        }

        .plexura-tech-ribbon .tp-cloud-icon {
          position: relative;
          width: 31px;
          height: 21px;
          border: 4px solid #fff;
          border-radius: 12px;
          border-top-color: transparent;
        }

        .plexura-tech-ribbon .tp-cloud-icon::before,
        .plexura-tech-ribbon .tp-cloud-icon::after {
          content: '';
          position: absolute;
          border: 4px solid #fff;
          background: transparent;
          border-bottom-color: transparent;
        }

        .plexura-tech-ribbon .tp-cloud-icon::before {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          left: 0;
          top: -10px;
          transform: rotate(-20deg);
        }

        .plexura-tech-ribbon .tp-cloud-icon::after {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          right: -1px;
          top: -13px;
          transform: rotate(18deg);
        }

        .plexura-tech-ribbon .tp-solution {
          font-size: 23px;
          font-weight: 650;
          letter-spacing: -.8px;
        }

        @media (max-width: 900px) {
          .plexura-tech-ribbon .tp-row {
            width: 760px;
            max-width: 100%;
          }

          .plexura-tech-ribbon .tp-set {
            gap: 34px;
            padding-right: 34px;
          }
        }

        @media (max-width: 620px) {
          .plexura-tech-ribbon .tp-title {
            font-size: 11px;
            letter-spacing: 4px;
            margin-bottom: 10px;
            text-align: center;
          }

          .plexura-tech-ribbon .tp-row {
            width: 100%;
          }

          .plexura-tech-ribbon .tp-set {
            gap: 24px;
            padding-right: 24px;
          }

          .plexura-tech-ribbon .tp-stripe {
            font-size: 22px;
          }

          .plexura-tech-ribbon .tp-webflow {
            font-size: 20px;
          }

          .plexura-tech-ribbon .tp-wordpress {
            font-size: 18px;
          }

          .plexura-tech-ribbon .tp-wp-mark {
            width: 24px;
            height: 24px;
            font-size: 15px;
          }

          .plexura-tech-ribbon .tp-shopify {
            font-size: 20px;
          }

          .plexura-tech-ribbon .tp-vercel {
            font-size: 17px;
            letter-spacing: 2px;
          }

          .plexura-tech-ribbon .tp-gcloud {
            font-size: 16px;
          }

          .plexura-tech-ribbon .tp-solution {
            font-size: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .plexura-tech-ribbon .tp-track {
            animation: none !important;
            transform: none;
          }

          .plexura-tech-ribbon .tp-row {
            overflow-x: auto;
          }
        }
          .plexura-tech-ribbon .tp-track {
  display: flex;
  width: max-content;
  animation: plexura-partners-scroll 18s linear infinite !important;
}

@media (hover: hover) and (pointer: fine) {
  .plexura-tech-ribbon .tp-row:hover .tp-track {
    animation-play-state: paused !important;
  }
}

@media (hover: none) {
  .plexura-tech-ribbon .tp-row:hover .tp-track {
    animation-play-state: running !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .plexura-tech-ribbon .tp-track {
    animation: none !important;
  }
}
      `}</style>

      <p className="tp-title">Built for ambitious brands</p>

      <div className="tp-row">
        <div className="tp-track">
          <PartnerSet />
          <PartnerSet hidden />
        </div>
      </div>
    </section>
  );
}