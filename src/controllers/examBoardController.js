import ExamBoard from "../models/ExamBoard";

export const examBoardWrite = async (req, res) => {
  try {
    const { title, contents, thumbnail } = req.body;
    const writing = await ExamBoard.create({
      title,
      contents,
      thumbnail,
    });
    console.log(writing);
    return res.status(200).send("등록되었습니다");
  } catch {
    return res.status(400).send("등록에 실패했습니다");
  }
};

export const examBoardList = async (req, res) => {
  const writings = await ExamBoard.find().exec();
  return res.send(writings);
};

export const examBoardDetail = async (req, res) => {
  const writing = await ExamBoard.findById(req.params.id);
  return res.status(200).send(writing);
};

export const examBoardRemove = async (req, res) => {
  await ExamBoard.findByIdAndDelete(req.body._id);
  return res.status(200).send("삭제되었습니다");
};

export const examBoardEdit = async (req, res) => {
  await ExamBoard.findByIdAndUpdate(req.body._id, {
    title: req.body.title,
    contents: req.body.contents,
  });
  return res.status(200).send("수정되었습니다");
};
