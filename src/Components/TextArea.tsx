import { Grid, Textarea, type SystemStyleObject, type TextareaProps } from "@chakra-ui/react";

interface IProps {
  value: string;
  setValue: (e: string) => void;
  textAreaProps?: TextareaProps;
  sx?: SystemStyleObject | undefined
}

function TextArea(props: IProps) {
  const { setValue, value, textAreaProps } = props;
  return (
    <Grid>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        height={"100%"}
        width={"100%"}
        {...textAreaProps}
        sx={{
          "&:focus": {
            border: "1px solid #99e3c7",
            outline: "none",
          },
        }}
      />
    </Grid>
  );
}

export default TextArea;
