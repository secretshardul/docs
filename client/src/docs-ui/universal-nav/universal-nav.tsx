import {Component, h, Host, Prop} from "@stencil/core";
import {
  universalNavStyle,
  universalNavContentStyle,
  brandStyle,
  linksStyle,
} from "./universal-nav.style";

@Component({tag: "docs-universal-nav", shadow: false})
export class DocsUniversalNav {
  /*** determines whether transparent background styles & starker text/logo colors are applied */
  @Prop() readonly blend?: boolean;
  /*** what label should go next to the brand icon? */
  @Prop() readonly heading?: string;
  /*** image url for brand icon */
  @Prop() readonly brandIcon?: string;
  /*** image url for brand icon when nav in blend mode */
  @Prop() readonly brandIconBlend?: string;

  render() {
    return (
      <Host class={universalNavStyle}>
        <amplify-container
          class={{
            "background-color-orange-hv":
              this.blend === undefined || !this.blend,
          }}
        >
          <div
            class={{
              [universalNavContentStyle]: true,
              blend: this.blend !== undefined && this.blend,
            }}
          >
            <stencil-route-link
              url="/"
              anchorTitle="Amplify Docs"
              class={brandStyle}
            >
              <img src={this.blend ? this.brandIconBlend : this.brandIcon} />
              <span>{this.heading}</span>
            </stencil-route-link>

            <div class={linksStyle}>
              <amplify-external-link
                redirect
                href="https://amplify.aws/community/"
                anchorTitle="Amplify Community"
              >
                <span>Community</span>
              </amplify-external-link>
              <amplify-external-link
                href="https://github.com/aws-amplify"
                anchorTitle="Amplify GitHub"
              >
                <span>Open Source</span>
              </amplify-external-link>
              <amplify-external-link
                href="https://aws.amazon.com/amplify/"
                anchorTitle="Amplify AWS Homepage"
                graphic={this.blend ? "black" : "white"}
              >
                <span>About Amplify</span>
              </amplify-external-link>
            </div>
          </div>
        </amplify-container>
      </Host>
    );
  }
}