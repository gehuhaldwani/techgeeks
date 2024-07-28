import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

export default (post: CollectionEntry<"blog">) => {
  return (
    <div
      style={{
        background: "#131314",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "-1px",
          border: "4px solid #00AEEF",
          background: "#131314",
          opacity: "0.9",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem",
          width: "88%",
          height: "80%",
        }}
      />

      <div
        style={{
          border: "4px solid #00AEEF",
          background: "#131314",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "20px",
            width: "90%",
            height: "90%",
            background: "#131314",
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              maxHeight: "84%",
              overflow: "hidden",
              color: "#00AEEF",
            }}
          >
            {post.data.title}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              width: "100%",
              marginBottom: "8px",
              fontSize: 40,
            }}
          >
            <span>
              {post.data.pubDatetime.getDate()}/
              {post.data.pubDatetime.getMonth()}/
              {post.data.pubDatetime.getFullYear()}
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="100px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1000 600"
              >
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M992.8,333.8c0,126.8-102.8,229.5-229.5,229.5c-112.9,0-206.8-81.6-225.9-189h-74.6
c-19.1,107.4-113,189-225.9,189C110,563.2,7.2,460.5,7.2,333.8C7.2,225.5,82,135,182.7,110.6V181c-62.9,22.2-108,82.2-108,152.8
c0,89.5,72.5,162,162,162s162-72.5,162-162c0-70.5-45.1-130.5-108-152.8v-70.3c87.8,21.2,156,92.9,171.9,182.6h74.6
c16-89.7,84.1-161.4,171.9-182.6V181c-62.9,22.2-108,82.2-108,152.8c0,89.5,72.5,162,162,162s162-72.5,162-162
c0-70.5-45.1-130.5-108-152.8v-70.3C917.9,134.9,992.8,225.6,992.8,333.8z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M290.8,333.8c0,29.8-24.2,54-54,54s-54-24.2-54-54c0-5.5,0.8-10.9,2.4-15.9c3.4,1.5,7.2,2.4,11.1,2.4
c14.9,0,27-12.1,27-27c0-4-0.9-7.7-2.4-11.1c5-1.5,10.4-2.4,15.9-2.4C266.6,279.8,290.8,303.9,290.8,333.8z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M817.2,333.8c0,29.8-24.2,54-54,54s-54-24.2-54-54s24.2-54,54-54c5.5,0,10.9,0.8,15.9,2.4
c-1.5,3.4-2.4,7.2-2.4,11.1c0,14.9,12.1,27,27,27c4,0,7.7-0.9,11.1-2.4C816.4,322.9,817.2,328.2,817.2,333.8z"
                  />
                  <rect
                    x="196.2"
                    y="36.8"
                    fill="#FFFFFF"
                    width="81"
                    height="189"
                  />
                  <rect
                    x="722.8"
                    y="36.8"
                    fill="#FFFFFF"
                    width="81"
                    height="189"
                  />
                </g>
              </svg>
              <span
                style={{
                  overflow: "hidden",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                {SITE.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
