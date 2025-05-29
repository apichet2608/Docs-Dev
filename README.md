📄 เริ่มต้น Git Repository และ Push ขึ้น Remote
# 1. เริ่มต้น Git repository
git init

# 2. สร้างและเปลี่ยนชื่อ branch เป็น main
git branch -M main

# 3. เพิ่มไฟล์ทั้งหมดเข้า staging
git add .

# 4. Commit ครั้งแรก
git commit -m "first commit"

# 5. เพิ่ม remote origin
git remote add origin http://10.17.66.143:8005/components/docs-components.git

# 6. Push ขึ้น remote โดยใช้ remote name: smartfactory
git push -u smartfactory main
หมายเหตุ: หากคุณยังไม่ได้ตั้งชื่อ remote ว่า smartfactory มาก่อน คำสั่ง git push -u smartfactory main จะล้มเหลว
ให้ใช้คำสั่งนี้แทน:

# เพิ่ม remote ด้วยชื่อ smartfactory
git remote add smartfactory http://10.17.66.143:8005/components/docs-components.git

# จากนั้น push
git push -u smartfactory main
หากคุณต้องการให้เขียนในรูปแบบ README.md หรือ shell script ก็แจ้งได้ครับ.