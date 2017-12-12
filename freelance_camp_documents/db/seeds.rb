10.times do |d|
FreelanceDocument.create!(
    title: "Document #{d}",
    description: "This is a cool description that I think you should be so pround of",
    file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/edit",
    image_url: "https://static.pexels.com/photos/6482/black-and-white-man-person-hands.jpg"
    )
end
