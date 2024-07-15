import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import {CodeBlock} from "@/components/ui/codeblock";
import LoginPage from "@/app/login/page";
import RootLayout from "@/app/layout";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CodeBlock">
                <CodeBlock language="javascript" value="// Your code here" />
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/RootLayout">
                <RootLayout>
                    {/* Child component here if needed */}
                </RootLayout>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;